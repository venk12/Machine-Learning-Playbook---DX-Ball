var express=require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(8888);
console.log('My server is running on port 8888')