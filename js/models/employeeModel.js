// 
//  employeeModel.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeedb');
var dbConnection = mongoose.connection;
dbConnection.on('error',function(err){
	console.log(error);
});

var employeeSchema = mongoose.Schema({
	id:Number,
	name:String,
	designation:String,
	yearsOfExp:Number,
	currentProject:String,
	reportingTo:String,
	techStack:String
});

var employeeModel = mongoose.model('employeeModel',employeeSchema);

module.exports = employeeModel;

//var employeeOne= new employeeModel({
//	id:648,name:"srinivas",designation:"Lead",yearsOfExp:7,currentProject:"Mean",reportingTo:"dinesh",techStack:"java"
//});
//employeeOne.save(function(err,employeeOne){
//	if(err) console.log(err);
//	console.log(employeeOne.name);
//});

//employeeModel.findOne({id:648},function(err,doc){
//	if(err) console.log('error while retrieving'+err);
//	console.log('Found'+doc.name);
//});
