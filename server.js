//server.js

  //set-up
  var express  = require('express');
  var app      = express();            //crea la app con express
  var port = 5000;

///////////////////////////////////////////////////////////////////////////////////////////////////
//application

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res){
  res.sendfile('./app/index.html');
})


///////////////////////////////////////////////////////////////////////////////////////////////////
    //listen app
    app.listen(port);
    console.log('App escuchando petición por puerto 5000');
