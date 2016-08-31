/**
 * SiteGiG CMS Plugin: Load this file when this plugin is enabled and CMS is loaded
 */

sitegig.directive('helloWorld', function($document) {
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello World!!</h3>',
		link: function(scope, elem, attrs) {

			$document[0].body.style.color = '#fff';

		}
	};
});
