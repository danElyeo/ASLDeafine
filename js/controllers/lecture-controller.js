angular.module('deafine.controllers')
.controller('LectureController', function($scope, $http, $routeParams, lectureData, videoFactory) {
	console.log("Lecture controller has its own file");
	$scope.lectureId = $routeParams.lectureId; // let's us know which lecture this page is for
	//$scope.activeVideo = 'Lecture'; // Each lecture page has one active video. Default is lecture
	$scope.termActive = true; // Flag to check if a term has been selected
	$scope.activeTerm = null; // Variable to store the current term when it has been selected
	$scope.lectureWatched = true; // Variable to check if vetter has finished watching the lecture video.
	$scope.dataLoaded = false;
	//$scope.lecturePath = "";

	// Terms Panel Variables
	$scope.questions = [];
	$scope.showQuestions = false;
	$scope.currQIndex = 0;
	$scope.currQuestion = "null";

	// Yony's code
	$scope.usingSafari = false;
	$scope.videoFormat = 'video/webm';
	$scope.videoExt = '.webm';
	$scope.detectIfSafari = function() {
		var theUserAgent = navigator.userAgent;
		if(theUserAgent.indexOf('Safari') != -1 ) {
			$scope.usingSafari = true;
			$scope.videoExt = '.mp4';
			$scope.videoFormat = 'video/mp4';
		}
	}

	$scope.detectIfSafari();

	$scope.hostDir = "https://s3.amazonaws.com/ASLDeafine/";


	console.log("Lecture Path: " + JSON.stringify(lectureData.data.lecture_dir));

	// Load in the lecture data into the markup
	$scope.lecturePath = lectureData.data.lecture_dir;
	$scope.terms = lectureData.data.terms;

	// Force the first term to be the active term for now
	$scope.activeTerm = $scope.terms[0];
	
	// Set the lecture video to be the active video
	$scope.activeVideoFile = $scope.lecturePath;
	console.log("Current Lecture: " + $scope.lecturePath) ;
	

	$scope.getFullPath = function(path) {
		//console.log("Full path: " + videoFactory.getFullPath(path));
		return videoFactory.getFullPath(path);
	}

	// Load vetting questions
    $http.get('data/vetting_questions.json')
	.success(function(data) {
		$scope.questions = data.questions;
		//console.log("Vetting questions loaded: " + data.questions);
	});

	
	// Store the terms of the current lecture
	//$scope.terms = data.terms;

	console.log("Terms: " + $scope.terms);
	

	// When a term is clicked, set it as the active term
	// An active term will jump to the timestamp on the current lecture,
	// as well as provide options to view Definition and Example of the term,
	// if any.
	$scope.setActiveTerm = function(term) {
		$scope.activeTerm = term;
		console.log("Active term is now: " + $scope.activeTerm.name);
		$scope.termActive = true;
		$scope.setActiveSignVideo($scope.activeTerm.sign_video);

		// Get the current source of the term sign video.
		// The source will determine its format: webm or mp4
		//$('[name=""]')

		// Show term definition video by default
		//$scope.setActiveDefVideo(); 

		// TODO: Jump to timestamp on lecture video
	}

	// When Definition is clicked, replaces main video in the view
	$scope.setActiveDefVideo = function() {
		console.log("Current active term: " + $scope.activeTerm.name);
		console.log("Term active status: " + $scope.termActive);
		//if($scope.termActive && $scope.activeTerm != null) {
			// Set active video file to the term definition video
			console.log("Change to Definition video: " + $scope.activeTerm.def_video);
			$scope.activeVideoFile = $scope.activeTerm.def_video;
		//}
	}

	// When Lecture is clicked, replaces main video in the view
	$scope.setActiveLectureVideo = function() {
		// Remove options
		//$scope.termActive = false;
		//$scope.activeTerm = null;
		// Set lecture video as active video
		$scope.activeVideoFile = $scope.lecturePath;
	}

	$scope.setActiveSignVideo = function() {
		console.log("Change to Sign video");
		var sign_src = $('[name="sign-btn"]');
		console.log(sign_src.children());
		console.log("Sign Source: " + $scope.activeTerm.sign_video);
		$scope.activeVideoFile = $scope.activeTerm.sign_video;
		console.log("Active Video File: " + $scope.activeVideoFile);
		//$scope.$apply(); // Doesn't work because its $apply() is alread in PROGRESS!!
		//changeVideoSrc();
	}

	// When Example is clicked, replaces main video in the view
	$scope.setActiveExampleVideo = function() {
		//if($scope.termActive) {
			console.log("Active term example video is: " + $scope.activeTerm.example_video);
			$scope.activeVideoFile = $scope.activeTerm.ex_video;
		//}	
	}

	// Called by deafine-video directive when vetter has finished watching the lecture
	$scope.setLectureWatched = function() {
		if(!$scope.lectureWatched) {
			console.log("You have finished watching the lecture. Showing terms now.");
			$scope.lectureWatched = true;
			//$rootScope.$apply(); // this is needed to make the terms appear
		}
	}

	$scope.initQuestions = function() {
		// $http.get('data/vetting_questions.json')
		// .success(function(data) {
		// 	console.log("Init Question from button");
		// });
		// if($scope.questions != null)
		// {
		// 	console.log("Questions not null");
		// }
		console.log("Length of questions " + $scope.questions.length); // 7
		if($scope.questions.length > 0) { // questions have been initialized
			// show the questions on the page
			$scope.showQuestions = true;
			console.log("ShowQuestions is now: " + $scope.showQuestions);
			$scope.currQuestion = $scope.questions[$scope.currQIndex].question;
		}

	}

	$scope.nextQuestion = function() {
		console.log("Go to Next Question");
		if($scope.currQIndex < $scope.questions.length - 1) {
			$scope.currQIndex++;
			$scope.currQuestion = $scope.questions[$scope.currQIndex].question;
		}
	}

	$scope.prevQuestion = function() {
		console.log("Go to Prev Question");
		if($scope.currQIndex > 0) {
			$scope.currQIndex--;
			$scope.currQuestion = $scope.questions[$scope.currQIndex].question;
		}
	}

	// $("#left-btn").parent().css({position: 'relative'});
	console.log("terms-container height: " + $('#terms-container').css('height'));
	console.log("button height: " + $('#left-btn').height());
	var offsetTop = ($('#terms-container').height() / 2) - ($('#left-btn').height() / 2);
	console.log("offsetTop: " + offsetTop);
	$("#left-btn").css({"margin-top":55});
	$("#right-btn").css({"margin-top":55});

	$('#left-btn').click(function(event) {
		event.preventDefault();
		var currScroll = $('#terms-scroller').scrollLeft();
		$('#terms-scroller').animate({
	            scrollLeft: currScroll - 205
	        }, 250);
	});
	$('#right-btn').click(function(event) {
		//console.log('Scrolling...');
		// $('#terms-subcontainer').scrollLeft(100);
		event.preventDefault();
		var currScroll = $('#terms-scroller').scrollLeft();
		$('#terms-scroller').animate({
	            scrollLeft: currScroll + 205
	    }, 250);
			
	});
}); 
	// .error(function(data, status, headers, config) {
	// 	console.log("Data: " + data + ", Status: " + status + ", Headers: " + headers + ", Config: " + config);
 //      // called asynchronously if an error occurs
 //      // or server returns response with an error status.
 //    });

// LectureController.resolve = {
// 	lectureData : function(lectureFactory) {
// 		return lectureFactory.getLectureData();
// 	}
// };
