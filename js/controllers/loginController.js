employeeApp.controller('loginController',function($scope,$location){
	$scope.login=function(){
		//perform db validation for authentication
		if($scope.userName=="srini"){
		alert("valid user");	
		$location.path('/employeeList');
		}
	};
});
