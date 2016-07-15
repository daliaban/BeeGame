/**
 * Created by dalia on 14/07/16.
 */
'use strict';

angular.module('beeGame')
    .controller('mainCtrl', function($scope, beeFactory) {

        $scope.newGame = function(){
            $scope.gameover = false;
            $scope.bees = beeFactory.sendBees();
        };

        var isGameOver = function(aliveBees){
            if (aliveBees.length == 0){
                $scope.gameover = true;
            }
        };

        var resetStruck = function(){
            angular.forEach($scope.bees, function(bee){
                bee.struck = 0;
            });
        };

        $scope.hitABee = function(){
            var aliveBees = beeFactory.aliveBees();
            isGameOver(aliveBees);
            resetStruck();
            if ($scope.gameover == false){
                var randomBee = aliveBees[Math.floor(Math.random() * aliveBees.length)];
                randomBee.remaining = (randomBee.remaining - randomBee.deduct) <= 0 ? 0: (randomBee.remaining - randomBee.deduct);
                randomBee.hit = randomBee.hit + 1;
                randomBee.struck = 1;

                if(randomBee.remaining == 0){
                    randomBee.health = "Dead :-(";
                }else if (randomBee.remaining < randomBee.deduct){
                    randomBee.health = "Dying Soon!"
                }

                if ($scope.bees[0].remaining == 0){
                    angular.forEach(aliveBees, function(bee, index){
                        if (index != 0){
                            bee.health = "Dead because Queen Bee died :-(";
                        }
                    });
                    $scope.gameover = true;
                    resetStruck();
                }
            }

        };

        $scope.newGame();

    });
