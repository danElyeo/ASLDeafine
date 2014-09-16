var deafineApp = angular.module('deafineApp', [
	'ngRoute',
	'ui.bootstrap',
	'deafine.factories',
	'deafine.directives',
	'deafine.controllers' // contains a list of all the controllers
	
]);

deafineApp.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/main.html',
			controller: 'TopicsController'
		}).
		when('/lecture/:lectureId', {
			templateUrl: 'partials/lecture.html',
			controller: 'LectureController',
			resolve: {
				lectureData: function(lectureFactory) {
					return lectureFactory.getLectureData().success(function(data) {
						console.log("Resolved data: " + JSON.stringify(data.lecture_dir));
						return data;
					});
				}
			}
		}).
		otherwise({
			redirectTo: '/main/'
		});
	}
]);

deafineApp.config(function($sceDelegateProvider){
	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
   		'self',
   		// Allow loading from our assets domain.  Notice the difference between * and **.
   		'https://s3.amazonaws.com/**'
   	]);
})