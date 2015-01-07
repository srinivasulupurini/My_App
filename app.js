//  employeeRoute.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 


var express = require('express'),
   http = require('http'), 
   cors = require('cors'),
   bodyParser = require('body-parser'),
   app = express();
   Employee = require('./js/models/employeeModel');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(__dirname));

app.get('/',function(req,res){
res.sendFile('Index.html');
});

app.get('/getEmployees',function(req,res){
Employee.find(function(err,employees){
	res.send(employees);
});
});

app.post('/addEmployee',function(req,res){
var employee = new Employee({
	id:req.body.id,
	name:req.body.name,
	designation:req.body.designation,
	yearsOfExp:req.body.yearsOfExp,
	currentProject:req.body.currentProject,
	reportingTo:req.body.reportingTo,
	techStack:req.body.techStack
});
employee.save(function(err,doc){
	if(err) cosole.log("Error while adding employee"+err);
	console.log("Successfully added"+doc.name);
	res.send('OK');
});
});

app.post('/updateEmployee/:id',function(req,res){
Employee.update({id:req.params.id},{
    name:req.body.name,
	designation:req.body.designation,
	yearsOfExp:req.body.yearsOfExp,
	currentProject:req.body.currentProject,
	reportingTo:req.body.reportingTo,
	techStack:req.body.techStack	
},function(err,numberAffected,raw){
  if (err) console.log("Error while updating "+err);
  console.log('The number of updated documents was %d', numberAffected);
  console.log('The raw response from Mongo was ', raw);
  res.send('OK');
});
});



app.get('/findEmployee/:id',function(req,res){
Employee.findOne({id:req.params.id},function(err,employee){
if(err) console.log('error while retrieving'+err);
res.send(employee);
console.log('Found'+employee.name);
});
});

app.get('/removeEmployee/:id',function(req,res){
Employee.find({id:req.params.id}).remove(function(err,doc){
	if(err) console.log('Error while removing employee');
	console.log('removed employee successfully');
	res.send('OK');
});	

});

http.createServer(app).listen(8000);
console.log("Server started at port 8000");
