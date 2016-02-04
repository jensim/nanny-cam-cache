var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var cachedRequest = require('cached-request')(request);
var cacheDirectory = __dirname +"/cache";
var port = 8080;
var options = {
    url: "http://172.23.0.192/image/jpeg.cgi",
	//url: "http://lorempixel.com/640/480/cats/",
    ttl: 1000 //1 seconds
  };
cachedRequest.setCacheDirectory(cacheDirectory);

app.get('/kaffecache/*', function(req, res) {
  cachedRequest(options).pipe(res);
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/images', express.static(__dirname + '/images'));
app.use('/script', express.static(__dirname + '/script'));

app.listen(port);
console.log('Node server is now lostening to port '+port);
