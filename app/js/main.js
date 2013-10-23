require.config({
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
		angularMocks: '../../bower_components/angular-mocks/angular-mocks',
		text: '../../bower_components/requirejs-text/text',
		blogParser: '../../blog_parser/blog'
	},
	baseUrl: 'app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'blogParser': {'exports' : 'blog'}
	},
	priority: [
		"angular"
	]
});

// hey Angular, we're bootstrapping manually!
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
		'angular',
		'angularRoute',
		'controllers'
], function(angular) {

		var APP_NAME = 'myApp';

		angular.element(document).ready(function() {
				var interestsApp = angular.module(APP_NAME, [
						'ngRoute',
						APP_NAME+'.controllers'
				]);

				interestsApp.config(
						['$routeProvider',
						 function($routeProvider) {
								 $routeProvider.
										 when('/blog', {
												 templateUrl: 'app/partials/blog.html',
												 controller: 'BlogCtrl'
										 }).
										 when('/about', {
												 templateUrl: 'app/partials/about.html',
												 controller: 'AboutCtrl'
										 }).
										 otherwise({
												 redirectTo: '/about'
										 });
						 }]);

				angular.bootstrap(document, [APP_NAME]);
		});

});
