angular.module('starships').service('shipSrvc', function($http){
    this.ships = ['stuff1', 'stuff2', 'stuff3']

    this.getShips = function(){
        return $http.get('https://swapi.co/api/starships/').then(res => {
            console.log(res);
            return res.data.results;
        })
    }
})