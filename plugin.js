/**
 * SiteGiG CMS Example Plugin
 */

sitegig.controller("examplePluginCtrl", function($scope, $cookies, $http) {

	$scope.name = 'example';
	$scope.fullname = 'Example Plugin';
	$scope.version = '1.0.0';
	$scope.author = 'Kylma.la';
	$scope.description = 'Shows how SiteGiG CMS plugin system works';
	$scope.has_plugin_page = true;

	// Init plugin
	$scope.init = function() {
		console.log('plugin ' + $scope.name + ' initialized');
	};

	// Init plugin page when user opens this plugin
	$scope.initPage = function() {
		angular.element(document).find('body').eq(0).append(angular.element('<link rel="stylesheet" type="text/css" href="plugins/' + $scope.name + '/styles/' + $scope.name + '.css" />'));
	};

	// Init plugin page
	$scope.initTemplate = function() {
		return 'plugins/' + $scope.name + '/templates/' + $scope.name + '.html';
	};

});