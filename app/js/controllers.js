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
						// TODO make a service to access blog post data
						$http.get('posts/post_list').success(function(data) {
								post_names = data.split('\n').slice(0,-1);
								var posts = [];
								for (var i = 0; i < post_names.length; i++) {
										$http.get('posts/'+post_names[i]).success(function(data) {
												var post = {};
												var parser_out = blogParser.parse(data);
												var post_metadata = {};
												for (var j = 0;
														 j < parser_out.metadata.length;
														 j++) {
														post_metadata[parser_out.metadata[j][0]] =
																parser_out.metadata[j][1];
												}
												post['title'] = post_metadata.title;
												var post_items = [];
												for (var j = 0; j < parser_out.post.length; j++) {
														post_items[j] = {};
														if (typeof parser_out.post[j] == 'string') {
																post_items[j]['type'] = 'string';
																post_items[j]['text'] = parser_out.post[j]
														} else {
																post_items[j]['type'] = 'url';
																post_items[j]['val'] = parser_out.post[j].val;
																post_items[j]['text'] = parser_out.post[j].text;
														}
												}
												post['post_items'] = post_items;
												posts.unshift(post);
										});
								}
								$scope.posts = posts;
						});
				}]);

		myAppControllers.directive('blogPost', function() {
				return {
						restrict: 'E',
						scope: {
								post: '=post'
						},
						templateUrl: 'app/partials/blog-post.html'
				};
		});

		return myAppControllers;
});