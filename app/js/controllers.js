define(['angular',
				'blogParser'
			 ], function (angular,
										blogParser) {
		var APP_NAME = 'myApp';

		var myAppControllers = angular.module(APP_NAME+'.controllers', []);

		myAppControllers.controller('HeaderCtrl', [
				'$scope', '$location',
				function HeaderCtrl($scope, $location) {
						$scope.isActive = function (viewLocation) {
								return viewLocation === $location.path();
						};
				}]);

		myAppControllers.controller('AboutCtrl', [
				'$scope',
				function BlogCtrl($scope) {
						$scope.resume_link = 'media/resume/resume-2012.pdf';
				}]);

		myAppControllers.controller('BlogCtrl', [
				'$scope', '$http',
				function BlogCtrl($scope, $http) {
						$http.get('posts/test').success(function(data) {

								$scope.test_post = blogParser.parse(data);

								// try {
								// 		$scope.test_post = blogParser.parse(data);
								// } catch(e) {
								// 		debugger;
								// }

						});
				}]);

		return myAppControllers;
});