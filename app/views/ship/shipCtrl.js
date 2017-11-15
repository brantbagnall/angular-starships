angular.module('starships').controller('shipCtrl', function($scope, $stateParams, shipSrvc){
    
    shipSrvc.getShip($stateParams.id).then(res => {
        return $scope.ship = res;
    })
})