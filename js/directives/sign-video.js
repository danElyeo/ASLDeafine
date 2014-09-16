// This directive create a video format designed to show
// ASL signs. Each video will have a placeholder image, and 
// when a mouse hovers above it, it will start playing the 
// clip.

angular.module('deafine.directives')
.directive('signVideo', function() {
	return {
		restrict: 'E',
        replace:true,
        //transclude:true, // wraps entire elements
        scope: {
            //name: "@",
			//ngSrc: "@",
			//height: "@",
			width: "@",
            //clickable:"@"
            filepath:"@filepath",
            selected:"@",
            disabled:"@"
            //directory:"video/local/"
		},
        //template:'<video src></video>',       
                        //     '<video name="{{name}}"' + 
                        //     'width="{{width}}"' + 
                        //     'height="{{height}}">' +
                        //     '<source ng-src="{{src}}"' + 
                        //         'clickable="{{clickable}}' + 
                        //         // 'poster="{{poster}}">' +
                        // '</video>'
        templateUrl: 'templates/sign-video-template.html',
        link: function(scope, element, attrs) {
            //console.log(scope.$parent.url);
            //element.attr('src', url);
            // element[0] is the video element
            element[0].volume = 0;

            // If a sign video is selected, add a color border to the element
            // if(element.attr('selected')) {
            //     console.log("Something is selected");
            //     console.log("Element parent: " + element.parent());
            //     element.parent().addClass('selected');
            // }

            element.on('click', function() {
                //console.log("Option clicked: " + element.parent().attr('name'));
                //element.attr('selected', "true");
                removeAllSelections();

                // Add border to currently selected
                element.parent().addClass('selected');
            });

            // // Video plays when mouse is hovered over it.
            element.on('mouseover', function() {
                // If clickable is true, change cursor to pointer
                if(attrs.clickable=="true")
                {
                    $(element).css('cursor', 'pointer');
                }

                //element[0].volume = 0;
                element[0].play(); // plays the video
             });

            // Reset the video when it ends 
            element.on('ended', function() {
                element[0].currentTime = 0;
                //element[0].load();
            });

            function removeAllSelections() {
                //console.log("Updating css...");
                // For each of the option buttons, remove current selection
                element.parent().parent().children().removeClass('selected');
            }

            // If video is clickable, set up click listener
            //f(attrs.clickable == "true") {
            //    element.on('click', function() {
                    //console.log("Send click event: " + element[0].getAttribute('name'));
                    //scope.changeActiveVideo = function() {
                     //   console.log('Dispatch to controller from directive');
                    //}
                    //scope.changeActiveVideo();
                    //scope.$broadcast('UPDATE_VIDEO');
                    // When an option or a term is clicked,
                    // change video on the lecture page. E.g., if Definition
                    // was clicked, replace the Lecture video with the Definition video

            //    });
            //}
        },
        controller: function($scope, $attrs) {
            $scope.getMp4 = function(filepath) {
                return filepath + '.mp4';
            }

            $scope.getWebm= function(filepath) {
                return filepath + '.webm';
            }
        }
    };
});