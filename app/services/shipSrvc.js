angular.module('starships').service('shipSrvc', function($http){
    this.ships = ['stuff1', 'stuff2', 'stuff3']

    this.getShips = function(){
        return $http.get('https://swapi.co/api/starships/').then(res => {
            
            return res.data.results.map(ship=>{
                let split = ship.url.split('/');
                ship.id = split[split.length - 2]
                // console.log(ship);
                return ship;
            })
        })
    }

    this.getShip = function(id){
        return $http.get(`https://swapi.co/api/starships/${id}`).then(res => {
            // console.log(res);
            return res.data;
        })
    }

})