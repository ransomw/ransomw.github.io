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

		function tag_to_html(tag_object) {
				if (tag_object.tag == "url") {
						return "<a href=\""+
								tag_object.val+"\">"+tag_object.text+"</a>";
				} else {
						// TODO parse error class
						throw new Error("unrecognized type of tag");
				}
		}

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
												var post_content = "";
												for (var j = 0; j < parser_out.post.length; j++) {
														if (typeof parser_out.post[j] == 'string') {
																post_content += parser_out.post[j];
														} else {
																post_content += tag_to_html(parser_out.post[j]);
														}
												}
												post['content'] = post_content;
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
						// TODO put the parser_out.post object in scope
						// TODO and use an ng-switch directive to loop over the posts
						template: 'a <a href="http://www.google.com">link</a><br/>'+
								'{{post.title}}<br>'+
								'{{post.content}}'
				};
		});

		return myAppControllers;
});