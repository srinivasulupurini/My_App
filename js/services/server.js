// 
//  server.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 

var express = require('express'),
    http    =require('http'),
    MongoClient = require('mongodb').MongoClient,
    bodyParser = require('body-parser'),
    mongoDbConnection = getDbConnection('demo'); 
    app = express();
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    //app.use(app.router);
  
app.get('/getEmployees',function(req,res){
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8020");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	var employees=mongoDbConnection.collection('employee');
	employees.find().toArray(function(err, results) {
	console.log("employee list from node---"+results);
	var json = JSON.stringify(results);
	res.end(json);
	//mongoDbConnection.close();
   	
});
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

app.post('/saveProfile',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.writeHead(200, {"Content-Type": "application/json"});
	console.log("from request----"+req.body);
	var profileToSave;
	req.on('data', function(profile) {
		
    var employee = {"id":648,"name":"srinivas1"};
    console.log("type of :"+profile.id);		
	 profileToSave = profile;	
    console.log("data"+profileToSave);
    console.log("Updating record for profile id:"+profileToSave.id); 
    });
    console.log("Updating record for profile id after:"+profileToSave.id);
    //var employees=mongoDbConnection.collection('employee');
   // if(profileToSave.id!=null){
    //console.log("Updating record for profile id:"+profileToSave.id); 	
   // employees.update({"id":profileToSave.id},{$set:{"name":profileToSave.name}},{upsert:true},
   // function(err, result){
   //  if (err) throw err;
   //   console.log(result);	
   // });   
   // } 
   // });
    
	var employee = {"id":"srini"};
    res.end(JSON.stringify(employee));
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
    
    function getDbConnection(dbToConnect){
  	var mongoHost = 'localhost'; 
	var mongoPort = 27017;
	var dbConnection={};
	var dburl = "mongodb://"+mongoHost+":"+mongoPort+"/"+dbToConnect;
	console.log("Connecting to db :"+dburl);
    MongoClient.connect(dburl,function(err,db){
  	mongoDbConnection=db;
  }); 
  }
  
http.createServer(app).listen(8000);
console.log("Node server started at 8000");
