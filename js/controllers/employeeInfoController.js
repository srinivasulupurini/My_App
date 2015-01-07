// 
//  employeeInfoController.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 
//author srinivas purini

employeeApp.controller('employeeInfoController',function($scope,$location,$http,employeeService){
	$scope.addEmployee = function(employee){
		var employee=employeeService.createEmployee();
		employee.setName($scope.name);
		employee.setId( $scope.id);
		employee.setDesignation($scope.designation);
		employee.setYearsOfExp($scope.yearsOfExp);
		employee.setCurrentProject($scope.currentProj);
		employee.setReportingTo($scope.reportingTo);
		employee.setTechStack($scope.techStack);
		employeeService.addEmployee($http,employee);
		employeeService.refreshEmployeeList();
		$location.path('/employeeList');
	}
	
	$scope.editProfile = function(employee){
		employeeService.setProfileToBeEdited(employee);
		$location.path('/editProfile');
		
	}
	
	$scope.loadProfile=function(){
		var profile=employeeService.getProfileToBeEdited();
		$scope.name=profile.name;
		$scope.id=profile.id;
		$scope.designation=profile.designation;
		$scope.yearsOfExp=profile.yearsOfExp;
		$scope.currentProj=profile.currentProject;
		$scope.reportingTo=profile.reportingTo;
		$scope.techStack=profile.techStack;
	}
	
	$scope.saveProfile = function(){
		var employee=employeeService.createEmployee();
	    employee.setName($scope.name);
		employee.setId( $scope.id);
		employee.setDesignation($scope.designation);
		employee.setYearsOfExp($scope.yearsOfExp);
		employee.setCurrentProject($scope.currentProj);
		employee.setReportingTo($scope.reportingTo);
		employee.setTechStack($scope.techStack);
		employeeService.saveProfile($http,employee);
		employeeService.refreshEmployeeList();
		$location.path('/employeeList');
		
	}
	
	$scope.deleteProfile=function(employee){
		employeeService.deleteEmployee($http,employee);
		$scope.showProfile = false;
	}
	
	
	$scope.getEmployeeProfile=function(employeeId){
	   //used promises to handle the asynchronous calls	
		employeeService.getEmployeeProfile($http,employeeId)
		.then(function(response){
		console.log(response.data.name);		
	    $scope.employeeById = response.data;	
		$scope.showProfile = true;	
		console.log("Controller:getProfile response"+response.data);
		},
		function(error){
		console.log("Err:Controller:getProfile response"+error);	
		});
		
	}
	
	
	
	$scope.addProfile = function(){
		$location.path('addEmployee');
	}
	
	$scope.loadEmployees = function(){
		$scope.showProfile = false;
		employeeService.loadEmployees($http);
		$scope.employees = employeeService.employees;
	}
});
