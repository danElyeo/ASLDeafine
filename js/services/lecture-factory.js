angular.module('deafine.factories')
.factory('lectureFactory', ['$http', '$q', '$log', function($http, $q, $log) {
	//var factory = {};
	var host_dir = "https://s3.amazonaws.com/ASLDeafine/";
	//var lecture_dir = ""; 
	var lectureData = {
	// $http.get("data/experiment_webm.json".success(data) {
	// 	console.log("GET is successful");
	// });
	// Get lecture data from json file or database
	//return {
		//$http.get("data/experiment_webm.json");
	// lectureData.getLectureData: function(data) {
	// 		return $http.get("data/experiment_webm.json").success(data);
	// 	// 	console.log("Factory data: " + data);
	// 	// 	lecture_dir = data.lecture_dir;
	// 	// 	console.log("Lecture_dir: " + lecture_dir);
	// }
		// getLecturePath: function(dir) {
		// 	return host_dir + dir;
		// }
	//}

	// lectureData.getLectureData = function() {
	// 	var deferred = $q.defer();
	// 	$http.get("data/experiment_webm.json").success(function(data) {
	// 		deferred.resolve({

	// 		})
	// 		console.log("Data returned: " + data.lecture_dir);
	// 		return data;
	// 	});

		getLectureData : function() {
     	//var deferred = $q.defer();
     	//return $http.get('data/experiment_webm.json');
       		// .success(function(data) { 
         //  		deferred.resolve({
         //     		lecture_dir: data.lecture_dir,
         //     		terms: data.terms
         //     	});
	       	// }).error(function(msg, code) {
	        //   deferred.reject(msg);
	        //   $log.error(msg, code);
	    //});
	    //console.log("Promise: " + deferred.promise);
     	//return deferred.promise;
	     	return $http.get('data/experiment_webm.json');
	    }
     	//return promise;
   	}
		//console.log("Promise returned: " + promise.lecture_dir);
		//return promise;
	//}

	return lectureData;

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
}])
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
