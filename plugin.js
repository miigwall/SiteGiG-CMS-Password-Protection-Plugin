/**
 * SiteGiG CMS Example Plugin
 */

sitegig.controller("passwordprotectPluginCtrl", [ '$scope', '$cookies', '$http', function($scope, $cookies, $http) {

	$scope.name = 'passwordprotect';
	$scope.fullname = 'Password Protection';
	$scope.version = '1.0.0';
	$scope.author = 'Kylma.la';
	$scope.description = 'Protect your site using password';
	$scope.has_plugin_page = true;
	$scope.plgdata = {};
	$scope.saved = false;

	// Init plugin
	$scope.init = function() {
		console.log('plugin ' + $scope.name + ' initialized');
	};

	// Init plugin page when user opens this plugin
	$scope.initPage = function() {
		
		console.log('plugin ' + $scope.name + ' page initialized');
	
		$scope.getPassword(function(data) {
			$scope.plgdata.password = data.value;
		});

	};

	// Init plugin page
	$scope.initTemplate = function() {
		return 'plugins/' + $scope.name + '/templates/' + $scope.name + '.html';
	};

	// Make an api request
	$scope.apiReq = function(endpoint, data, callback) {

		$http({
		    method: 'POST',
		    url: endpoint,
		    data: data,
		    headers: { 'Content-Type' : 'application/json' }
		}).then(function responseCallback(response) {
			callback(response.data);
		});

	};

	// Get password
	$scope.getPassword = function(callback) {
		
		$scope.apiReq('/rest/get/settings', { 'setting_name' : $scope.name + '_pw' }, function(data) {
			callback(data);
		});

	};

	// Set password
	$scope.setPassword = function() {

		$scope.apiReq('/rest/set/settings', { 'setting_name' : $scope.name + '_pw', 'setting_value' : $scope.plgdata.password }, function(data) {
			$scope.saved = true;
		});

	};

}]);