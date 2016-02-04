var express = require('express');
var app = express();
var request = require('request');
var cachedRequest = require('cached-request')(request);
var cacheDirectory = __dirname +"/cache";
var port = 8080;
var options = {
    url: "http://lorempixel.com/640/480/cats/",
    ttl: 1000 //1 seconds
  };
cachedRequest.setCacheDirectory(cacheDirectory);

app.get('/kaffecache', function(req, res) {
  cachedRequest(options).pipe(res);
});
app.use('/', express.static(__dirname + '/dist'));

app.listen(port);
console.log('Node server is now lostening to port '+port);
