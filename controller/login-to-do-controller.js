app.controller('login-to-do-controller',
		function($scope, $rootScope, $state, $localStorage) {

			$rootScope.loggedInUser = $localStorage.loggedInUser;
			$scope.usernmae = 'darth';
			$scope.passwordValue = 'vader';
			$scope.isAuthenticated = true;

			$scope.login = function(username, password) {
				if ($scope.usernmae == username && $scope.passwordValue == password) {
					$localStorage.loggedInUser = username;
					$rootScope.loggedInUser = username;
					$state.go('userToDo');
				} else{
					$scope.isAuthenticated = false;
				}
			}
		});