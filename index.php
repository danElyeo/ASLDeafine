<!doctype html>
<html ng-app="deafineApp" ng-controller="AppController">
<head>
	<title>Deafine ASL</title>
	<meta charset="utf-8">
	<meta name="author" content="Daniel Yeo">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Load CSS -->
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/lecture-page.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/bootstrap-glyphicons.css">
	<link rel="stylesheet" href="css/font-awesome.css">
	<link rel="stylesheet" href="css/vetting.css">

	
	<!-- Load libraries -->
	<script src="lib/angular/angular.min.js"></script>
	<script src="lib/angular/angular-route.min.js"></script>
	<script src="lib/jquery/jquery-2.1.1.min.js"></script>
	<!--<script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.11.0.js" type="text/javascript"></script>-->
	<script src="lib/bootstrap/ui-bootstrap-tpls-0.11.0.min.js"></script>

	<!-- Load scripts -->
	<script src="js/deafine-app.js"></script>

	<!-- FACTORIES -->
	<!--<Script src="js/directives/sign-video.js"></script> -->
	<script src="js/services/deafine-factory.js"></script>
	<script src="js/services/lecture-factory.js"></script>
	<script src="js/services/video-factory.js"></script>
	<!-- <script src-"js/services/video-factory.js"></script> -->

	<!-- CONTROLLERS -->
	<script src="js/controllers/deafine-controllers.js"></script>
	<script src="js/controllers/lecture-controller.js"></script>
	<script src="js/controllers/topics-controller.js"></script>

	<!-- DIRECTIVES -->
	<script src="js/directives/deafine-directives.js"></script>
	<script src="js/directives/deafine-video.js"></script>
	<script src="js/directives/sign-video.js"></script>
	<script src="js/directives/overlay.js"></script>

	
</head>
<body>
<div class="container">
	<!-- Testing Angular -->
	<!-- <input ng-model="val" type="text">
	<h1>{{val}}</h1> -->

	<!-- Testing Controller -->
	<!-- <div ng-controller="AppController">
		<p>Hello from the AppController: {{author.name}}</p>
	</div> -->
	
	<!-- Testing Partial View -->
	<!-- <div class="main" ng-view>
		
	</div> -->
	<!-- Go up and Go Down are links that navigate between viewports-->
	<!-- <div class="center">
	<a class="fixed" href="{{}}" id="go_up">Go up</a>
	</div>
	<div class="center">
	<a class="fixed" href="{{}}" id="go_down">Go down</a>
	</div> -->

	<!-- Testing video functionality -->
	<!-- <video controls autoplay>
		<source src="videos/Experiment/Experiment_lect.mp4" type="video/mp4">
	</video> -->

	<!-- Add a navigation bar here-->
	<!-- <nav class="navbar navbar-default" role="navigation" collapse="navbarIsCollapsed">
		<div class="btn btn-default" ng-click="toggleEnglish()" style="margin-bottom:5px">Toggle English</div>
	</nav> -->

	<!-- <nav class="navbar navbar-default" role="navigation" collapse="navbarIsCollapsed">
		<div class="btn btn-default" ng-click="toggleEnglish()" style="margin-bottom:5px">Toggle English</div>
	</nav>
	<div class="col-md-1"><div class="thumb"><div class="thumb-Link" ng-click="navbarIsCollapsed = !navbarIsCollapsed"><i class="fa fa-align-justify fa-2x"></i></div></div></div>
	</div> -->

	<nav role="navigation" collapse="isCollapsed">
		<div class="well well-lg">
			<button class="btn btn-default" ng-click="toggleEnglish()">Toggle English</button>
		</div>
	</nav>
	<div class="col-md-1"><div class="thumb"><div class="thumb-Link" ng-click="isCollapsed = !isCollapsed"><i class="fa fa-align-justify fa-2x"></i></div></div></div>
	</div>
	<hr>

	<!-- <h2>Welcome to Deafine!</h2> -->
	<div ng-view=""></div> <!-- Placeholder for the views -->
	


	<!-- Load the introductory video if user has not seen it before  -->
	<!-- <div ng-include src="'partials/intro-video.html'" onload="videoLoaded()" autoscroll="gotoVideo()"></div> -->
	

	<!-- After the video, load the topics page. This should be the main page when a user has already seen the video before-->
	<!-- <div ng-include src="'partials/topics.html'" class="viewport">
		
	</div> -->
</div> <!-- close container -->
</body>
</html>