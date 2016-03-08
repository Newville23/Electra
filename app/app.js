var app = angular.module('Sinventory', ['ngMaterial', 'ui.router']);

app.factory('products', [function() {
  var o = {
    products: [
      { name : 'Armario para 6 medidores',  dimdention : { high: 1200 , width: 800 , deep: 400 }, price : 790982,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 9 medidores',  dimdention : { high: 1800 , width: 800 , deep: 400 }, price : 961200,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 12 medidores', dimdention : { high: 1850 , width: 1000 , deep: 400 }, price : 1047200,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 18 medidores', dimdention : { high: 1850 , width: 1600 , deep: 400 }, price : 1467800,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 24 medidores', dimdention : { high: 1850 , width: 2000 , deep: 400 }, price : 2010000,  dealer: "Soluciones de ingeniería A&H ", quantity: 1}

    ],
    brands: [
      {id: 'P01', name: 'ABB',
        breakers: [
          {id: 'A1N', Imin: 15, Imax: 125, Icu: 25, price: 583400, discount: 55},
          {id: 'A2C', Imin: 125, Imax: 250, Icu: 50, price: 686000, discount: 55},
          {id: 'A2N', Imin: 125, Imax: 250, Icu: 85, price: 740000, discount: 55},
          {id: 'A3N', Imin: 320, Imax: 630, Icu: 85, price: 3228100, discount: 55},
        ],
        in: [15, 30, 40, 60,],
        min: [10, 20, 30, 63]
       },

      {id: 'P02', name: 'Chint',
        breakers: [
          {id: 'NM1-63S',  Imin: 16, Imax: 63, Icu: 20, price: 134000, discount: 58 },
          {id: 'NM1-125S', Imin: 32, Imax: 125, Icu: 42, price: 142000, discount: 58 },
          {id: 'NM1-250S', Imin: 160, Imax: 250, Icu: 50, price: 211000, discount: 58 },
          {id: 'NM1-400S', Imin: 250, Imax: 400, Icu: 50, price: 660000, discount: 58 },
          {id: 'NM1-630S', Imin: 400, Imax: 630, Icu: 50, price: 1070000, discount: 58 },
          {id: 'NM1-800H', Imin: 700, Imax: 800, Icu: 85, price: 2070000, discount: 58 },
          {id: 'NM1-1250H', Imin: 1000, Imax: 1250, Icu: 85, price: 3300000, discount: 58 },
        ],
        in: [60, 80, 70, 100],
        min: [15, 32, 63]
       }
    ]
  } ;
  return o ;
}]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){

      $stateProvider.state(
        'home',{
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        });

        $urlRouterProvider.otherwise('home');
  }]);


app.controller('MainCtrl', [
  '$scope', 'products',
  function($scope, products){

    $scope.products = products.products;
    $scope.brands = products.brands;
    $scope.test = 'Hello world!';

    $scope.addProduct = function() {
      if(!$scope.name || $scope.name == ""){  return;}
      $scope.products.push({
        name: $scope.name ,
        position: $scope.position,
        dealer: $scope.dealer,
        quantity: 1
      });
      $scope.name = "";
      $scope.position = "";
      $scope.dealer = "";
    };
    $scope.quantity = function(product){
      product.quantity += 1;
    };
  }
]);

app.controller('BrandCtrl', [
  '$scope',
  '$stateParams',
  'products',
function($scope, $stateParams, products){
  $scope.brands = products.brands;

}]);

app.controller('InCtrl', [
  '$scope',
  'products',
  function($scope, products){
    $scope.brands = products.brands;

  }
])
