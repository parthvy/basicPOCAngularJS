app.controller('user-to-do-controller', function($scope, $rootScope, $localStorage, $window) {
	$scope.create=true
	$scope.todos = [
	                {'name' : 'FName' ,'todo':'Do Something', 'done' : false}
	                ];
	
	
	$scope.addToDo = function(){
		$scope.todos.push({'name':$scope.userName,'todo':$scope.newtodo,'done':false})
		$scope.userName = ''
		$scope.newtodo = ''
	}
	
	$scope.clearToDo = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done 
				})
	}
	$scope.editToDo = function(todo){
		$scope.edit=true;
		$scope.create=false;
		$scope.exisitngToDo = todo;
		$scope.edit=true;
	}
	$scope.saveEdit = function()
	{
		$scope.exisitngToDo = {};
		$scope.edit=false;
		$scope.create=true;
		
	}
	$scope.deletetodo = function(todo)
	{
		$scope.todos.splice($scope.todos.indexOf(todo),1);
		$scope.edit=false;
		$scope.create=true;
		
	}
	$rootScope.logout = function() {
		$rootScope.loggedInUser = null;
		$localStorage.loggedInUser = null;
		window.location = "/?#!/login";
	}
});