'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
    .controller('MainCtrl', ['$scope', 'firebaseUrl',
        function($scope, firebaseUrl) {
            $scope.categories = firebaseUrl.getList().$asArray();

            $scope.getClass = function(date) {
                console.log(date + '  ' + new Date().getTime())
            }

            $scope.lastWeek = new Date();
            $scope.lastWeek.setDate($scope.lastWeek.getDate() - 7);

            $scope.dynamicTooltip = "Hello, World!";
            $scope.dynamicTooltipText = "dynamic";

            $scope.submitForm = function() {

                // check to make sure the form is completely valid
                if ($scope.submitform.$valid) {

                    var btn = $('#submitBtn')
                    btn.button('loading');
                    //$scope.email.name
                    $.ajax({
                        type: "POST",
                        url: "https://mandrillapp.com/api/1.0/messages/send.json",
                        data: {
                            "key": "3_BV_Lw_5EnrhOXAif--pA",
                            "message": {
                                "from_email": $scope.submitformdata.email,
                                'from_name': $scope.submitformdata.name,
                                "to": [{
                                    "email": "hany@thesevenlayers.net",
                                    "name": "Hany rabah",
                                    "type": "to"
                                }],
                                "autotext": "true",
                                "subject": "x-piration submit form",
                                "html": ' <strong>sender name:</strong> ' + $scope.submitformdata.name + '<br /> <strong>sender email:</strong> ' + $scope.submitformdata.email + '<br />  <strong>website suggestion:</strong> ' + $scope.submitformdata.websitename + '<br />  <strong>website url:</strong> ' + $scope.submitformdata.websiteurl
                            }
                        }
                    }).done(function(response) {
                        btn.button('reset');
                        $('#submitForm').find("input[type=text], input[type=email]").val("");

                        console.log(response); // if you're into that sorta thing
                    }).fail(function(response) {
                        alert('Error sending message.');
                    });;




                }

            };


        }
    ]);