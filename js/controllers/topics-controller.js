angular.module('deafine.controllers')
.controller('TopicsController', ['$scope', 'dataFactory', 'videoFactory', function($scope, dataFactory, videoFactory) {
	
	$scope.topics = [];
	$scope.lectures = [];

	console.log("Get user data");
	dataFactory.getUserData(function(data){
		console.log("Get user data: SUCCESS!");
		console.log(data);
		$scope.username = data.username;
		$scope.intro_watched = data.intro_watched;
		
		console.log("Get user lectures");
		dataFactory.getUserLectures(function(data) {
			console.log("Get lectures assigned to current user: SUCCESS!");
			//console.log(data); 
			$scope.lectures = data.lectures;

			// Process all the lectures to extract and group lectures by topics
			$scope.lectures.forEach(function(entry) {
				//console.log("Entry: " + entry.name + ", Topic: " + entry.topic);
				// check to see if current lecture topic exist in array
				var topicExist = $scope.topics.indexOf(entry.topic);
				//console.log("Does topic exist?: " + topicExist);
				// if it does not exist, add it into the topics array
				if(topicExist < 0) {
					$scope.topics.push(entry.topic);
				}
			});
			//console.log("Total number of topics: " + $scope.topics.length);
		});

	});

	// console.log("Get user lectures");
	// dataFactory.getUserLectures(function(data) {
	// 	console.log("Get lectures assigned to current user: SUCCESS!");
	// 	//console.log(data); 
	// 	$scope.lectures = data.lectures;

	// 	// Process all the lectures to extract and group lectures by topics
	// 	$scope.lectures.forEach(function(entry) {
	// 		//console.log("Entry: " + entry.name + ", Topic: " + entry.topic);
	// 		// check to see if current lecture topic exist in array
	// 		var topicExist = $scope.topics.indexOf(entry.topic);
	// 		//console.log("Does topic exist?: " + topicExist);
	// 		// if it does not exist, add it into the topics array
	// 		if(topicExist < 0) {
	// 			$scope.topics.push(entry.topic);
	// 		}
	// 	});
			
	// 	//console.log("Total number of topics: " + $scope.topics.length);
	// });

	$scope.getFullPath = function(path) {
		//console.log("Full path: " + videoFactory.getFullPath(path));
		return videoFactory.getFullPath(path);
	}
}]);