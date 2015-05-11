describe(
	'avalcepina-image (directive of avalcepina-carousel)',
	function() {
		var $scope;
		var $el, $window;

		beforeEach(module('avalcepina-carousel'));

		beforeEach(inject(function($compile, $rootScope, _$window_) {
			$window = _$window_;

			$window.innerWidth = 1100;

			$scope = $rootScope.$new();
			$scope.slide = {
				urlLarge: 'http://lorempixel.com/800/320/sports/5',
				urlSmall: 'http://lorempixel.com/400/160/sports/5'
			};

			var html = '<div avalcepina-image>' +
				'</div>';

			$el = angular.element(html);
			$compile($el)($scope);
			$scope.$digest();
		}));

		it('exposes $scope.slide', inject(function() {
			expect($scope.slide)
				.toBeDefined();

		}));

		it('exposes $scope.src', inject(function() {
			expect($scope.src)
				.toBeDefined();

		}));
	});
