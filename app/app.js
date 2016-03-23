var app = angular.module('Sinventory', ['ngMaterial', 'ui.router']);

app.factory('products', [function() {
  var o = {
    cot: [],
    poles:[1, 2, 3],
    products: [
      { name : 'Armario para 6 medidores', medidores: 6, dimention : { high: 1200 , width: 800 , deep: 400 }, price : 790982,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 9 medidores', medidores: 9,  dimention : { high: 1800 , width: 800 , deep: 400 }, price : 961200,   dealer: "Soluciones de ingeniería A&H ", quantity: 1 },
      { name : 'Armario para 12 medidores', medidores: 12, dimention : { high: 1850 , width: 1000 , deep: 400 }, price : 1047200,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 18 medidores', medidores: 18, dimention : { high: 1850 , width: 1600 , deep: 400 }, price : 1467800,  dealer: "Soluciones de ingeniería A&H ", quantity: 1},
      { name : 'Armario para 24 medidores', medidores: 24, dimention : { high: 1850 , width: 2000 , deep: 400 }, price : 2010000,  dealer: "Soluciones de ingeniería A&H ", quantity: 1}

    ],
    brands: [
      {id: 'P01', name: 'ABB',
        breakers: [
          {id: 'A1N', Imin: 15, Imax: 125, Icu: 25, price: 583400, discount: 0.55},
          {id: 'A2C', Imin: 125, Imax: 250, Icu: 50, price: 686000, discount: 0.55},
          {id: 'A2N', Imin: 125, Imax: 250, Icu: 85, price: 740000, discount: 0.55},
          {id: 'A3N', Imin: 320, Imax: 630, Icu: 85, price: 3228100, discount: 0.55},
        ],
        minis:{
          1:[
            {id: 'S200', In:1 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:2 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:3 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:4 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:6 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:10 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:16 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:20 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:25 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:32 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:40 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:50 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:63 ,Icu: 10, price: 3228100,discount: 0.55},
          ],
          2:[
            {id: 'S200', In:1 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:2 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:3 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:4 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:6 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:10 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:16 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:20 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:25 ,Icu: 10, price: 583400, discount: 0.55},
            {id: 'S200', In:32 ,Icu: 10, price: 686000, discount: 0.55},
            {id: 'S200', In:40 ,Icu: 10, price: 740000, discount: 0.55},
            {id: 'S200', In:50 ,Icu: 10, price: 3228100,discount: 0.55},
            {id: 'S200', In:63 ,Icu: 10, price: 3228100,discount: 0.55},
          ],
          3:[

          {id: 'S200', In:1 ,Icu: 10, price: 583400, discount: 0.55},
          {id: 'S200', In:2 ,Icu: 10, price: 686000, discount: 0.55},
          {id: 'S200', In:3 ,Icu: 10, price: 740000, discount: 0.55},
          {id: 'S200', In:4 ,Icu: 10, price: 3228100,discount: 0.55},
          {id: 'S200', In:6 ,Icu: 10, price: 583400, discount: 0.55},
          {id: 'S200', In:10 ,Icu: 10, price: 686000, discount: 0.55},
          {id: 'S200', In:16 ,Icu: 10, price: 740000, discount: 0.55},
          {id: 'S200', In:20 ,Icu: 10, price: 3228100,discount: 0.55},
          {id: 'S200', In:25 ,Icu: 10, price: 583400, discount: 0.55},
          {id: 'S200', In:32 ,Icu: 10, price: 686000, discount: 0.55},
          {id: 'S200', In:40 ,Icu: 10, price: 740000, discount: 0.55},
          {id: 'S200', In:50 ,Icu: 10, price: 3228100,discount: 0.55},
          {id: 'S200', In:63 ,Icu: 10, price: 3228100,discount: 0.55},
        ]
      },
        in: [15, 30, 40, 60,130],
        icu: [10,25,50,85],
        min: [10, 20, 30, 63]
       },

      {id: 'P02', name: 'Chint',
        breakers: [
          {id: 'NM1-63S',  Imin: 16, Imax: 63, Icu: 20, price: 134000, discount: 0.58 },
          {id: 'NM1-125S', Imin: 32, Imax: 125, Icu: 42, price: 142000, discount: 0.58 },
          {id: 'NM1-250S', Imin: 160, Imax: 250, Icu: 50, price: 211000, discount: 0.58 },
          {id: 'NM1-400S', Imin: 250, Imax: 400, Icu: 50, price: 660000, discount: 0.58 },
          {id: 'NM1-630S', Imin: 400, Imax: 630, Icu: 50, price: 1070000, discount: 0.58 },
          {id: 'NM1-800H', Imin: 700, Imax: 800, Icu: 85, price: 2070000, discount: 0.58 },
          {id: 'NM1-1250H', Imin: 1000, Imax: 1250, Icu: 85, price: 3300000, discount: 0.58 },
        ],
        in: [60, 80, 70, 100, 450],
        icu: [10,25,50,85],
        min: [15, 32, 63]
       }
    ],
    components:{
      bars: [
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "1/8" , width: "5/8", weight:2.19 ,in:162 }, price:153600  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "5/8", weight:3.79 ,in:180 }, price:266200  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "3/4", weight:4.81 ,in:274 }, price:337500  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "1 1/4", weight:7.35 ,in:379 }, price:515900  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "1 1/2", weight:9.89 ,in:482 }, price:694300  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "2", weight:12.42 ,in:583 }, price:872600  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "2 1/2", weight:14.96 ,in:688 }, price:1051000  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "3 1/4", weight:20.04 ,in:885 }, price:1407700  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/16" , width: "4", weight:25.12 ,in:1080 }, price:1764300  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "1 1/2", weight:19.23 ,in:715 }, price:1350300  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "2", weight:24.30 ,in:852 }, price:1707000  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "2 1/2", weight:29.38 ,in:985 }, price:2063700  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "3 1/4", weight:39.54 ,in:1240 }, price:2777600  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "4", weight:49.70 ,in:1490 }, price:3490500  },
          {code:"BAR000" ,supplier:"vcp" ,description: {thickness: "3/8" , width: "4 3/4", weight:59.86 ,in:1740 }, price:4204900  }

      ],
      wire:[
        {caliber:8, use:"Circuitos principales o ramales, en uso industrial o residencial", type:"THHW CT", price:2100,discount:0, In:50},
        {caliber:6, use:"Circuitos principales o ramales, en uso industrial o residencial", type:"THHW CT", price:3000,discount:0, In:65}
      ],
      terminal:[
        {code:"TEV0004", supplier:"vcp", description:{name:"terminal corto estañado No.8", caliber:8 }, price:500, discount:50},
        {code:"TEV0006", supplier:"vcp", description:{name:"terminal corto estañado No.6", caliber:6 }, price:600, discount:50}
      ],
      insulator:{code:"ABA 1/40",supplier:"melbat", price:19300, discount:50},
      others:50000

    }
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
    $scope.components = products.components;
    $scope.poles = products.poles;
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
          //Calculo total de precio de interruptor

            if ($scope.newI > breaker.Imin && $scope.newI < breaker.Imax) {
              subBreaker = breaker.price*(1-breaker.discount)*(1+0.10);
            }
        });

        // Calculo total de precion de barra de cobre
        angular.forEach($scope.components.bars, function(bar){
          if (($scope.newI*1.25) < bar.description.in) {
            barMts = ($scope.newArmario.dimention.width/1000)*3*1.10;
            barNum = barMts/5.7;
            subBar = barNum*bar.price*(1+0.10)*(1-0.54);
          }
        });
        //Calculo total de cable segun numero de medidores y polos

        if ($scope.newImin <  50) {
          subWire = ($scope.components.wire[0].price*(1-$scope.components.wire[0].discount)*(1+0.10))*($scope.newArmario.dimention.high/1000)*$scope.newArmario.medidores*($scope.newPole+1);
        }else {
          subWire = ($scope.components.wire[1].price*(1-$scope.components.wire[1].discount)*(1+0.10))*($scope.newArmario.dimention.high/1000)*$scope.newArmario.medidores*($scope.newPole+1);
        }

        manpower = $scope.newArmario.medidores * 20000;

        subtotal = subBreaker + subWire + $scope.newArmario.price + subBar + manpower;

        total = subtotal*(1+0.12)*(1+0.20);
        iva = total*(1.16);
        return total;
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
