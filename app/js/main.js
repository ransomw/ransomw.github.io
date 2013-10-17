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

// require( [
// 	'angular',
// 	'app',
// 	'routes'
// ], function(angular, app, routes) {

require( [
	'angular'
], function(angular) {


		'use strict';
		var $html = angular.element(document.getElementsByTagName('html')[0]);

		debugger;

		angular.element().ready(function() {
				$html.addClass('ng-app');
				angular.module('myApp', []);
				// angular.bootstrap($html, [app['name']]);
				angular.bootstrap($html, ['myApp']);
		});

		// angular.element(document).ready(function() {
		// 		angular.module('myApp', []);
		// 		angular.bootstrap(document, ['myApp']);
		// });

});
