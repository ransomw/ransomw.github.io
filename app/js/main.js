require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		text: '../../bower_components/requirejs-text/text'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular'
], function(angular) {

		var APP_NAME = 'myApp';

		angular.element(document).ready(function() {
				var interestsApp = angular.module(APP_NAME, []);

				interestsApp.controller('InterestsCtrl', [
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

				angular.bootstrap(document, [APP_NAME]);
		});

});
