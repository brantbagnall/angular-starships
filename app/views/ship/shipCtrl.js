angular.module('starships').controller('shipCtrl', function($scope, $stateParams){
    $scope.id = $stateParams.id;
    $scope.ship = 'the ship with the id of ' + $stateParams.id;
})