"use strict";angular.module("designersListApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("designersListApp").controller("MainCtrl",["$scope","jsonFactory",function(a,b){a.otherStuff={},b.getOtherStuff().then(function(b){a.otherStuff=b.data.components},function(a){console.error(a)})}]),angular.module("designersListApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("designersListApp").factory("jsonFactory",["$q","$http",function(a,b){return{getOtherStuff:function(){var c=a.defer(),d=b.get("storage/websites.json");return d.then(function(a){c.resolve(a)},function(a){console.log(a)}),c.promise}}}]);