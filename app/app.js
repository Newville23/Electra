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
        minis:[
          {

            pole:1,
            list:[
            {id: '2CDS251001 R0014', In:1 ,Icu: 10, price: 46000,discount: 0.55},
            {id: '2CDS251001 R0024', In:2 ,Icu: 10, price: 46000,discount: 0.55},
            {id: '2CDS251001 R0034', In:3 ,Icu: 10, price: 46000,discount: 0.55},
            {id: '2CDS251001 R0044', In:4 ,Icu: 10, price: 46000,discount: 0.55},
            {id: '2CDS251001 R0064', In:6 ,Icu: 10, price: 32000, discount: 0.55},
            {id: '2CDS251001 R0104', In:10 ,Icu: 10, price: 32000, discount: 0.55},
            {id: '2CDS251001 R0164', In:16 ,Icu: 10, price: 32000, discount: 0.55},
            {id: '2CDS251001 R0204', In:20 ,Icu: 10, price: 32000,discount: 0.55},
            {id: '2CDS251001 R0254', In:25 ,Icu: 10, price: 32000, discount: 0.55},
            {id: '2CDS251001 R0324', In:32 ,Icu: 10, price: 32000, discount: 0.55},
            {id: '2CDS251001 R0404', In:40 ,Icu: 10, price: 46300, discount: 0.55},
            {id: '2CDS251001 R0504', In:50 ,Icu: 10, price: 52200,discount: 0.55},
            {id: '2CDS251001 R0634', In:63 ,Icu: 10, price: 53900,discount: 0.55},
          ]
        },
          {
            pole:2,
            list:[
            {id: '2CDS252001 R0014', In:1 ,Icu: 10, price: 146700, discount: 0.55},
            {id: '2CDS252001 R0024', In:2 ,Icu: 10, price: 146700, discount: 0.55},
            {id: '2CDS252001 R0034', In:3 ,Icu: 10, price: 146700, discount: 0.55},
            {id: '2CDS252001 R0044', In:4 ,Icu: 10, price: 146700,discount: 0.55},
            {id: '2CDS252001 R0064', In:6 ,Icu: 10, price: 71100, discount: 0.55},
            {id: '2CDS252001 R0104', In:10 ,Icu: 10, price: 71100, discount: 0.55},
            {id: '2CDS252001 R0164', In:16 ,Icu: 10, price: 71100, discount: 0.55},
            {id: '2CDS252001 R0204', In:20 ,Icu: 10, price: 71100,discount: 0.55},
            {id: '2CDS252001 R0254', In:25 ,Icu: 10, price: 71100, discount: 0.55},
            {id: '2CDS252001 R0324', In:32 ,Icu: 10, price: 71100, discount: 0.55},
            {id: '2CDS252001 R0404', In:40 ,Icu: 10, price: 113000, discount: 0.55},
            {id: '2CDS252001 R0504', In:50 ,Icu: 10, price: 102900,discount: 0.55},
            {id: '2CDS252001 R0634', In:63 ,Icu: 10, price: 107500,discount: 0.55},
          ]
        },
          {
            pole:3,
            list:[

          {id: '2CDS253001 R0014', In:1 ,Icu: 10, price: 174000,discount: 0.55},
          {id: '2CDS253001 R0024', In:2 ,Icu: 10, price: 174000,discount: 0.55},
          {id: '2CDS253001 R0034', In:3 ,Icu: 10, price: 174000,discount: 0.55},
          {id: '2CDS253001 R0044', In:4 ,Icu: 10, price: 174000,discount: 0.55},
          {id: '2CDS253001 R0064', In:6 ,Icu: 10, price: 125500,discount: 0.55},
          {id: '2CDS253001 R0104', In:10 ,Icu: 10, price: 125500 ,discount: 0.55},
          {id: '2CDS253001 R0164', In:16 ,Icu: 10, price: 125500 ,discount: 0.55},
          {id: '2CDS253001 R0204', In:20 ,Icu: 10, price: 125500 ,discount: 0.55},
          {id: '2CDS253001 R0254', In:25 ,Icu: 10, price: 125500 ,discount: 0.55},
          {id: '2CDS253001 R0324', In:32 ,Icu: 10, price: 125500 ,discount: 0.55},
          {id: '2CDS253001 R0404', In:40 ,Icu: 10, price: 170000, discount: 0.55},
          {id: '2CDS253001 R0504', In:50 ,Icu: 10, price: 192500,discount: 0.55},
          {id: '2CDS253001 R0634', In:63 ,Icu: 10, price: 214200,discount: 0.55},
        ]
      }
      ],
        in: [15, 30, 40, 60,130],
        icu: [10,25,50,85],
        min: [10, 20, 30, 63]
       },

      {id: 'P02', name: 'Chint',
        breakers: [
          {id: 'NM1-63S',  Imin: 16, Imax: 63, Icu: 20, price: 134000, discount: 0.42 },
          {id: 'NM1-125S', Imin: 32, Imax: 125, Icu: 42, price: 142000, discount: 0.51 },
          {id: 'NM1-250S', Imin: 160, Imax: 250, Icu: 50, price: 211000, discount: 0.51 },
          {id: 'NM1-400S', Imin: 250, Imax: 400, Icu: 50, price: 660000, discount: 0.51 },
          {id: 'NM1-630S', Imin: 400, Imax: 630, Icu: 50, price: 1070000, discount: 0.51 },
          {id: 'NM1-800H', Imin: 700, Imax: 800, Icu: 85, price: 2070000, discount: 0.51 },
          {id: 'NM1-1250H', Imin: 1000, Imax: 1250, Icu: 85, price: 3300000, discount: 0.51 },
        ],
        minis:[
          {

            pole:1,
            list:[
            {id: 'NB1-63H 1P 1A', In:1 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 2A', In:2 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 3A', In:3 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 4A', In:4 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 6A', In:6 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 10A', In:10 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 16A', In:16 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 20A', In:20 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 25A', In:25 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 32A', In:32 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 40A', In:40 ,Icu: 10, price: 15500 , discount: 0.49},
            {id: 'NB1-63H 1P 50A', In:50 ,Icu: 10, price: 15500 ,discount: 0.49},
            {id: 'NB1-63H 1P 63A', In:63 ,Icu: 10, price: 15500 ,discount: 0.49},
          ]
        },
          {
            pole:2,
            list:[
            {id: 'NB1-63H 2P 1A', In:1 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 2A', In:2 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 3A', In:3 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 4A', In:4 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 6A', In:6 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 10A', In:10 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 16A', In:16 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 20A', In:20 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 25A', In:25 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 32A', In:32 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 40A', In:40 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 50A', In:50 ,Icu: 10, price:36000, discount: 0.49},
            {id: 'NB1-63H 2P 63A', In:63 ,Icu: 10, price:36000, discount: 0.49},
          ]
        },
          {
            pole:3,
            list:[

          {id: 'NB1-63H 3P 1A', In:1 ,Icu: 10, price: 52200,discount: 0.49},
          {id: 'NB1-63H 3P 2A', In:2 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 3A', In:3 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 4A', In:4 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 6A', In:6 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 10A', In:10 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 16A', In:16 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 20A', In:20 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 25A', In:25 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 32A', In:32 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 40A', In:40 ,Icu: 10, price: 49500, discount: 0.49},
          {id: 'NB1-63H 3P 50A', In:50 ,Icu: 10, price: 49500,discount: 0.49},
          {id: 'NB1-63H 3P 63A', In:63 ,Icu: 10, price: 49500,discount: 0.49},
        ]
      }
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
        'armarios',{
          url: '/armarios',
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        });

        $urlRouterProvider.otherwise('armarios');
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
	        var total = 0,
              subBreaker = 0,
              subWire = 0,
              subBar = 0,
              manpower = 0,
              subMini = 0
              ;

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
          subWire = ($scope.components.wire[0].price*(1-$scope.components.wire[0].discount)*(1+0.10))*($scope.newArmario.dimention.high/1000)*$scope.newArmario.medidores*($scope.newPole.pole+1);
        }else {
          subWire = ($scope.components.wire[1].price*(1-$scope.components.wire[1].discount)*(1+0.10))*($scope.newArmario.dimention.high/1000)*$scope.newArmario.medidores*($scope.newPole.pole+1);
        }

        manpower = $scope.newArmario.medidores * 20000 * (1+0.20);
        subMini = $scope.newMin.price * $scope.newArmario.medidores *(1+0.1)*(1-$scope.newMin.discount);

        subtotal = subBreaker + subWire + $scope.newArmario.price + subBar + manpower + subMini;

        total = subtotal*(1+0.12)*(1+0.20)*(1-($scope.discount/100));
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
