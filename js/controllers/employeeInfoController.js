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
		employeeService.addEmployee(employee);
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
		employeeService.saveProfile(employee);
		$location.path('/employeeList');
		
	}
	
	$scope.deleteProfile=function(employee){
		employeeService.deleteEmployee(employee);
		$scope.showProfile = false;
		$scope.$apply();
		$location.path('/employeeList');
	}
	$scope.getEmployeeProfile=function(employeeId){
		$scope.employeeById=employeeService.getEmployeeProfile(employeeId);
		$scope.showProfile = true;
	}
	//
	
	$scope.addProfile = function(){
		$location.path('addEmployee');
	}
	
	$scope.loadEmployees = function(){
		$scope.showProfile = false;
		employeeService.loadEmployees($http);
		$scope.employees = employeeService.employees;
	}
});
