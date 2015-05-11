describe(
	'avalcepina-carousel-nav (directive of avalcepina-carousel)',
	function() {
		var $scope;
		var $el;

		beforeEach(module('avalcepina-carousel'));

		beforeEach(inject(function($compile, $rootScope) {

			$scope = $rootScope.$new();
			$scope.count = 100;

			var html = '<div avalcepina-carousel-nav>' +
				'</div>';

			$el = angular.element(html);
			$compile($el)($scope);
			$scope.$digest();
		}));

		it('exposes a $scope.selectSlide', inject(function() {
			expect($scope.selectSlide)
				.toBeDefined();
		}));

		it('exposes a $scope.prevSlide', inject(function() {
			expect($scope.prevSlide)
				.toBeDefined();
		}));

		it('exposes a $scope.nextSlide', inject(function() {
			expect($scope.nextSlide)
				.toBeDefined();
		}));

		it('should set $scope.active to id when calling $scope.selectSlide(id)',
			inject(function() {
				var someId = 100;
				$scope.selectSlide(someId);

				expect($scope.active)
					.toEqual(someId);
			}));

		it(
			'should set $scope.active to the next slide when calling $scope.nextSlide()',
			inject(function() {
				var someId = 98;
				$scope.selectSlide(someId);

				$scope.nextSlide();

				expect($scope.active)
					.toEqual(someId + 1);

				$scope.nextSlide();

				expect($scope.active)
					.toEqual(0);


			}));
		it(
			'should set $scope.active to the previous slide when calling $scope.prevSlide()',
			inject(function() {
				var someId = 2;

				$scope.selectSlide(someId);

				$scope.prevSlide();

				expect($scope.active)
					.toEqual(someId - 1);

				$scope.prevSlide();

				expect($scope.active)
					.toEqual(0);

				$scope.prevSlide();

				expect($scope.active)
					.toEqual(99);


			}));

	});
