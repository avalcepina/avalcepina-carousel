describe(
	'myCtrl (controller of myApp)',
	function() {
		'use strict';
		beforeEach(module('myApp'));

		var $scope;
		var myCtrl;

		beforeEach(inject(function($controller, $rootScope) {
			$scope = $rootScope.$new();

			// instantiate controller
			myCtrl =
				$controller(
					'myCtrl', {
						$scope: $scope
					});
		}));

		it('should be defined', inject(function() {
			expect(myCtrl)
				.toBeDefined();
		}));

		it('should expose slides on its $scope', inject(function() {
			expect($scope.slides)
				.toBeDefined();
		}));

	});
