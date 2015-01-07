// 
//  EmployeeApp.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 

var employeeApp = angular.module('employeeApp',[]);

employeeApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller:'loginController',
		templateUrl:'../views/login.html'
	})
	.when('/employeeList',{
		controller:'employeeInfoController',
		templateUrl:'../views/employeeList.html'
	})
	.when('/addEmployee',{
		controller:'employeeInfoController',
		templateUrl:'../views/addEmployee.html'
	})
	.when('/editProfile',{
		controller:'employeeInfoController',
		templateUrl:'../views/editProfile.html'
	})
	.otherwise({
		"redirectTo":"/"
	});
});
