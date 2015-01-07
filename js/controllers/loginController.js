// 
//  loginController.js
//  <Employee portal>
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 

employeeApp.controller('loginController',function($scope,$location){
	$scope.login=function(){
		//perform db validation for authentication
		if($scope.userName=="srini"){
		alert("valid user");	
		$location.path('/employeeList');
		}
	};
});
