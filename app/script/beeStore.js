/**
 * Created by dalia on 14/07/16.
 */
'use strict';

angular.module('beeGame')
    .factory('beeFactory', function(){

        var beesStore = [
            {name: 'Queen Bee', hitpoint: 100, deduct: 8, hit: 0, remaining: 100, struck: 0, health: 'Alive & Healthy'},
            {name: 'Worker Bee 1', hitpoint: 75, deduct: 10, hit: 0, remaining: 75, struck: 0, health: 'Alive & Healthy'},
            {name: 'Worker Bee 2', hitpoint: 75, deduct: 10, hit: 0, remaining: 75, struck: 0, health: 'Alive & Healthy'},
            {name: 'Worker Bee 3', hitpoint: 75, deduct: 10, hit: 0, remaining: 75, struck: 0, health: 'Alive & Healthy'},
            {name: 'Worker Bee 4', hitpoint: 75, deduct: 10, hit: 0, remaining: 75, struck: 0, health: 'Alive & Healthy'},
            {name: 'Worker Bee 5', hitpoint: 75, deduct: 10, hit: 0, remaining: 75, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 1', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 2', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 3', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 4', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 5', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 6', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 7', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'},
            {name: 'Drone Bee 8', hitpoint: 50, deduct: 12, hit: 0, remaining: 50, struck: 0, health: 'Alive & Healthy'}
        ];
        var bees = [];

        return {
            sendBees: function () {
                angular.copy(beesStore,bees);
                return bees;
            },
            aliveBees: function(){
                return bees.filter(function(item){
                    return item.remaining != 0;
                });

            }
        }
 });