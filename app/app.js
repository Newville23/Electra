var app = angular.module('Sinventory', ['ngMaterial', 'ui.router']);

app.factory('products', [function() {
  var o = {
    cot: [],

    products: [
      { name : 'Armario para 6 medidores', medidores: 6, dimdention : { high: 1200 , width: 800 , deep: 400 }, price : 790982,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 9 medidores', medidores: 9,  dimdention : { high: 1800 , width: 800 , deep: 400 }, price : 961200,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 12 medidores', medidores: 12, dimdention : { high: 1850 , width: 1000 , deep: 400 }, price : 1047200,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 18 medidores', medidores: 18, dimdention : { high: 1850 , width: 1600 , deep: 400 }, price : 1467800,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 24 medidores', medidores: 24, dimdention : { high: 1850 , width: 2000 , deep: 400 }, price : 2010000,  dealer: "Soluciones de ingeniería A&H ", quantity: 1}

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
        icu: [10,25,50,85],
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
        in: [60, 80, 70, 100, 450],
        icu: [10,25,50,85],
        min: [15, 32, 63]
       }
    ],
    components: [
      bars: [
          {code:"BAR000" , description: {thickness: "1/8" , width: "5/8", weight:2.19 ,in:162 }, price:153600  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "5/8", weight:3.79 ,in: }, price:266200  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "3/4", weight:4.81 ,in:274 }, price:337500  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "1 1/4", weight:7.35 ,in:379 }, price:515900  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "1 1/2", weight:9.89 ,in:482 }, price:694300  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "2", weight:12.42 ,in:583 }, price:872600  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "2 1/2", weight:14.96 ,in:688 }, price:1051000  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "3 1/4", weight:20.04 ,in:885 }, price:1407700  }
          {code:"BAR000" , description: {thickness: "3/16" , width: "4", weight:25.12 ,in:1080 }, price:1764300  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "1 1/2", weight:19.23 ,in:715 }, price:1350300  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "2", weight:24.30 ,in:852 }, price:1707000  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "2 1/2", weight:29.38 ,in:985 }, price:2063700  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "3 1/4", weight:39.54 ,in:1240 }, price:2777600  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "4", weight:49.70 ,in:1490 }, price:3490500  }
          {code:"BAR000" , description: {thickness: "3/8" , width: "4 3/4", weight:59.86 ,in:1740 }, price:4204900  }



      ],
      wire:[

      ],
      terminal:[

      ],
      insulator:{},
      others:
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

    $scope.createCot = function() {
      if(!$scope.newArmario || $scope.newArmario == ""){  return;}
      $scope.cot.push({
        Armario: $scope.newArmario ,
        brand: $scope.newBrand,
        In : $scope.newIn,
        Icu : $scope.newIcu
      });
      $scope.newArmario = "";
      $scope.newBrand = "";
      $scope.newIn = "";
      $scope.newIcu = "";
    };

    $scope.total = function() {
	        var total = 0;
	        angular.forEach($scope.newBrand.breakers, function(breaker) {

            if ($scope.newI > breaker.Imin && $scope.newI < breaker.Imax) {
              total = breaker.price + $scope.newArmario.price;
            }



        });


        	return total;
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
