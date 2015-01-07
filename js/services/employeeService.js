// 
//  employeeService.js
//  Employee portal
//  
//  Created by srinivasulup on 2015-01-07.
//  Copyright 2015 srinivasulup. All rights reserved.
// 

employeeApp.factory('employeeService',function(){
	
	var _employees = [];
 
    function Employee(){
    	this.id="",
    	this.name="",
    	this.designation="",
    	this.yearsOfExp="",
    	this.currentProject="",
    	this.reportingTo="",
    	this.techStack=""
    }
    Employee.prototype.getId=function(){
    	return this.id;
    };
     Employee.prototype.setId=function(id){
    	 this.id=id;
    };
    
     Employee.prototype.getName=function(){
    	return this.name;
    };
     Employee.prototype.setName=function(name){
    	 this.name=name;
    };
    
     Employee.prototype.getDesignation=function(){
    	return this.designation;
    };
         Employee.prototype.setDesignation=function(desg){
    	 this.designation=desg;
    };

    
     Employee.prototype.getYearsOfExp=function(){
    	return this.yearsOfExp;
    };
         Employee.prototype.setYearsOfExp=function(yearsOfExp){
    	 this.yearsOfExp=yearsOfExp;
    };
    
     Employee.prototype.getCurrentProject=function(){
    	return this.currentProject;
    };
     Employee.prototype.setCurrentProject=function(currentProject){
    	 this.currentProject=currentProject;
    };
    
     Employee.prototype.getReportingTo=function(){
    	return this.reportingTo;
    };
    
     Employee.prototype.setReportingTo=function(reportingTo){
    	 this.reportingTo=reportingTo;
    };
    
     Employee.prototype.getTechStack=function(){
    	return this.techStack;
    };
     Employee.prototype.setTechStack=function(techStack){
    	 this.techStack=techStack;
    };
    
    var _createEmployee= function(){
    	return new Employee();
    }
    var _profileTobeEdited = new Object();
    
	var _addEmployee = function(http,employee){
	//_employees.push(employee);
	http({
    method: 'POST',
    url: 'http://localhost:8000/addEmployee',
    headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
    data: JSON.stringify(employee)
	}).success(function () {});
	alert("added"+employee.name+"to list"+_employees.length);	
	}
	
	var _saveProfile = function(employee){
		var existingUser=false;	
		for(var i=0;i<_employees.length;i++){
			 	if(_employees[i].id==employee.id){
			 	_employees[i]=employee;
			 	existingUser=true;
			 	return;
			 	} 
		}	
		if(!existingUser)
		{
			alert("User with id does not exists,creating new user");
		 	_employees.push(employee);	
		 	return;
		}
	}
	
	var _deleteEmployee = function(http,employee){
	http.get('http://localhost:8000/removeEmployee/'+employee.id)
		.success(function(data){
			console.log('EmployeeService:::deleted employee');
		_employees.splice(_employees.indexOf(employee),1);	
		})
		.error(function(data){
			console.log(data);
		});	
	}
	
	var _getEmployees = function(){
		//get employee names from mongodb using nodejs
	}
	
	var _getEmployeeProfile = function(http,employeeId,callback){
		 return http.get('http://localhost:8000/findEmployee/'+employeeId)
		.success(function(data){
			console.log("EmployeeService::getEmployeeProfile"+data);
		    //data.prototype = new Employee();
			return data;
		})
		.error(function(data){
			console.log(data);
			return data
		});
	}
	
	var _setProfileToBeEdited = function(employeeProfile){
		_profileTobeEdited = employeeProfile;
		alert("setting profile to be edited"+_profileTobeEdited.name)
	}
	
	var _getProfileToBeEdited = function(){
		return _profileTobeEdited;
	}
	
	var _loadEmployees = function(http){
		if(_employees.length>0){
			_employees.splice(0,_employees.length);
		}
		http.get('http://localhost:8000/getEmployees')
		.success(function(data){
			data.forEach(function(item){
				item.prototype=new Employee();
				_employees.push(item);
			});
			
		})
		.error(function(data){
			console.log(data);
		});
	}
	
	var _saveProfile_new = function(http,profile){
	http({
    method: 'POST',
    url: 'http://localhost:8000/updateEmployee/'+profile.id,
    headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
    data: JSON.stringify(profile)
	}).success(function () {
	});
	}
	
	var _refreshEmployeeList= function(){
		this._employees=[];
	}
	
	return{
		employees:_employees,
		createEmployee:_createEmployee,
		profileTobeEdited:_profileTobeEdited,
		getProfileToBeEdited:_getProfileToBeEdited,
		setProfileToBeEdited:_setProfileToBeEdited,
		addEmployee:_addEmployee,
		saveProfile:_saveProfile_new,
		deleteEmployee:_deleteEmployee,
		getEmployees:_getEmployees,
		getEmployeeProfile:_getEmployeeProfile,
		loadEmployees:_loadEmployees,
		refreshEmployeeList:_refreshEmployeeList
	}
});
