angular.module('deafine.factories')
.factory('videoFactory', function($http) {
	var host_dir = "https://s3.amazonaws.com/ASLDeafine/";
	return {
		getFullPath: function(dir) {
			return host_dir + dir;
		},

		getDir: function() {
			return host_dir;
		}
	}
})