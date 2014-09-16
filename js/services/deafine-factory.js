angular.module('deafine.factories', [])
.factory('dataFactory', function($http) {
	//var factory = {};
	//var username = "unregistered";
	//var intro_watched = false;

	// Get user data from json file or database
	return {
		getUserData: function(callback) {
			$http.get("data/user.json").success(callback);
		},

		getUserLectures: function(callback) {
			$http.get("data/lectures_webm.json").success(callback);
			//$http.get("http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/topics").success(callback);
		}
	}

	// factory.getUsername = function(data) {
	// 	$http.get("data/user.json").success(data) {
	// 		//$scope.username = data.username;
	// 		console.log("GET Successful!: "+data);
	// 		//console.log(username);
	// 		//console.log("Username is " + username);
	// 		//return username;
	// 	});
	// 	//console.log("Username is " + username);
	// }

	// factory.getIntroWatched = function() {
	// 	return intro_watched;
	// }

	// factory.getData = function() {
	// 	return data;
	// };

	// factory.getIntroWatched = function() {
	// 	return true;
	// };

	// return factory;
})
// .factory('videoFactory', function($document) {
// 	var videoElement = $document[0].createElement('video');
// 	return {
// 		videoElement: videoElement,

// 		play: function(filename) {
// 			videoElement.src = filename;
// 			videoElement.play();
// 		}
// 	}
// });
