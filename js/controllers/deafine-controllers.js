var deafineControllers = angular.module('deafine.controllers', ['deafine.factories']);

deafineControllers.controller('AppController',function($scope, $rootScope) {
	$scope.username = "unregistered";
	$scope.intro_watched = false;

	// Yony
	$rootScope.usingEnglish = false;	
	//$scope.showingSignInPage = true;
	$rootScope.navbarIsCollapsed = true;

	// Test collapse animation
	$scope.isCollapsed = true;



	$scope.setVideoWatched = function() {
		console.log("Video is watched!");
		$scope.intro_watched = true;
		//$scope.$apply();
	}

	$scope.toggleEnglish = function(){
		$rootScope.usingEnglish = !$rootScope.usingEnglish;
		//console.log("ToggleEnglish is now " + $rootScope.usingEnglish);
	}

	$scope.toggleNavbar = function(){
		$rootScope.navbarIsCollapsed = !$rootScope.navbarIsCollapsed;
	}
	//$scope.watched = deafineVideo.watched();

	// dataFactory.getUserData(function(data){
	// 	$scope.username = data.username;
	// 	$scope.intro_watched = data.intro_watched;
	// 	//$scope.$apply();
	// });

	// dataFactory.getUserTopics(function(data) {
	// 	console.log("Get topics successful!");
	// 	$scope.topics = data.topics;
	// });

	// $("#intro-video ").on('ended', function() {
	// 	console.log("Video has ended");
	// })
	
});

// angular.module('deafine.controllers')
// .controller('LectureController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
// 	$http.get('data/experiment_lecture.json').success(function(data) {
// 		console.log("Lecture controller has its own file");
// 		$scope.lectures = data;
// 		//console.log("Data:" + data);
// 		$scope.lectureId = $routeParams.lectureId;
// 	});
// }]);


// function ScrollCtrl($scope, $location, $anchorScroll) {
//  	$scope.videoLoaded = function () {
//  		console.log("Video loaded");
//  		alert("Video loaded, jump to anchor");
//  	}

 	// $scope.gotoVideo = function (){
 	// 	//alert("Go to video");
  //   	// set the location.hash to the id of
  //   	// the element you wish to scroll to.
  //   	$location.hash('intro_video');

  //   	// call $anchorScroll()
  //   	$anchorScroll();
  // 	}
//}