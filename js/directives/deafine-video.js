angular.module('deafine.directives')
.directive('deafineVideo', function(videoFactory) {

	return {
		restrict: 'E',
        replace:true,
        transclude:true, // wraps entire elements
        scope: {
            id: "@",
			ngSrc: "@",
			height: "@",
			width: "@",
			controls:"@",
            autoplay:"@",
            type:"@",
            videoEndHandler:"&"
		},
        templateUrl: 'templates/deafine-video-template.html',
        //templateUrl: 'templates/test-video.html',
        //template:'<video id="{{id}}" width="{{width}}" height="{{height}}" volume="0" {{autoplay}} {{controls}}><source src="{{src}}"/></video>',
        link: function(scope, element, attrs) {
            //console.log("Video source: " + element[0].children[0].src);
            element.attr('type', attrs.type);
            //element.insertBefore('<div class="video-overlay">Hello</div>');
            //$compile(element.contents())(scope);
            //element.attr('src', "assets/video/signs/"+attrs.iframeSrc);
        //    element.attr('type', attrs.type);
            
            element[0].volume = 0;
            // element.on('load', function () {
            //     element[0].volume = 0;
            // })
            // If there  are no controls, let the user play the video when 
            // they hover the mouse over it.
           
            // if(!element[0].controls) {
            //     element.bind('mouseover', function() {
            //         element[0].play(); // plays the video
            //     });
            // } else {
                // If there are controls, users can play video by clicking on them
            // element.on('click', function() {
            //     if(element[0].paused) {
            //         element[0].play();
            //     } else {
            //         element[0].pause();
            //     }
            // })
            //}

            // element.bind('mouseover', function() {
            //     //element.css('cursor', 'pointer');
            //     element[0].play(); // plays the video
            // });
            

            //----- Video events ---------
            element.on('ended', function() {
                //$rootScope.intro_watched = true;
                //scope.watched = true;
                console.log('Video has ended');
                scope.videoEndHandler(); // sends it back to the controller!
                //scope.model="hello";
                //scope.$apply('intro_watched = true');
            });

            // When video is clicked, play/pause the video
            element.on('click', function(e) {
                var videoClicked = element[0]; // Element[0] is video

                // e.clientX and e.clientY returns mouse position relative to page
                /*// FOR DEBUGGING
                console.log("x: " + e.clientX);
                console.log("y: " + e.clientY);*/

                // element[0] is the video element
                // offsetLeft and offsetTop is the video element position relative to page
                /*// FOR DEBUGGING
                console.log("offsetx: " + videoClicked.offsetLeft);
                console.log("offsety: " + videoClicked.offsetTop);*/

                // offsetHeight returns height of video element
                /*// FOR DEBUGGING
                console.log("video height: " + videoClicked.offsetHeight);*/

                // Calulate the mouse mouse position relative to video element
                var mouseX_on_video = e.clientX - videoClicked.offsetLeft;
                var mouseY_on_video = e.clientY - videoClicked.offsetTop;
                /*// FOR DEBUGGING
                console.log("x: " + mouseX_on_video);
                console.log("y: " + mouseY_on_video);*/

                //console.log("Height from video botton: " + (videoClicked.offsetHeight - mouseY_on_video));
                
                // IMPORTANT NOTE FROM DAN: If mouse is clicked on an area above the controls, play or pause the video
                // Otherwise if you click on the controls, nothing happens if you want to add
                // the video click event. The controls will interfere with the video click event
                // because itself is part of the video element.
                // if((videoClicked.offsetHeight - mouseY_on_video) > 40) { // height of controls is about 40px
                //     // If video is playing, pause it, otherwise play
                //     if(videoClicked.paused) {
                //         videoClicked.play();
                //     } else {
                //         videoClicked.pause();
                //     }
                // }
            });
        }
	};
});