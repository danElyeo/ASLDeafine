angular.module('deafine.directives')
  	.directive('overlay', Overlay);

function Overlay () {
  	return {
    	restrict: 'A',
    	scope: {},
    	template: [
      	'<div style="width:{{width}}; height={{height}};">',
      	'</div>'
    	].join(''),
    	link: function (scope, element, attrs) {
      		// DOM manipulation/events here!
      		// $element.on('click', function () {
      		//   $(this).addClass('test');
      		// });
			console.log("This element has an overlay!");
			console.log("Element: " + element.attr('name'));

			// Set the overlay width and height to that of the div
			//element.css('width', '300px');
    	}
  	};
}