var express = require('express'),
    http    =require('http'),
    app = express();
    
app.get('/getEmployees',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  var employees =[{ name: "srini", id: "648" },{name:"Raj",id:"520"}];
  var json = JSON.stringify(employees);
  res.end(json);
});

app.get('/addProfile',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  var employees =[{ name: "srini", id: "648" },{name:"Raj",id:"520"}];
  var json = JSON.stringify(employees);
  res.end(json);
});

app.get('/saveProfile',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  var employees =[{ name: "srini", id: "648" },{name:"Raj",id:"520"}];
  var json = JSON.stringify(employees);
  res.end(json);
});


app.get('/getProfile',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  var employees =[{ name: "srini", id: "648" },{name:"Raj",id:"520"}];
  var json = JSON.stringify(employees);
  res.end(json);
});
    
http.createServer(app).listen(8000);
console.log("Node server started at 8000");
