define(['angular'], function (angular) {
		var APP_NAME = 'myApp';

		var myAppControllers = angular.module(APP_NAME+'.controllers', []);

		myAppControllers.controller('InterestsCtrl', [
						'$scope', '$http',
						function InterestsCtrl($scope, $http) {

						$http.get('posts/test').success(function(data) {
								$scope.test_post = data;
						});

						$scope.interests = [
								{'name' : 'books',
								 'preference': 1},
								{'name' : 'music',
								 'preference': 2},
								{'name' : 'movies',
								 'preference': 3}
						];
						$scope.orderProp = 'preference';
				}]);

		return myAppControllers;
});