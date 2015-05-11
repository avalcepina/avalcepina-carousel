(function() {
	'use strict';
	angular.module('avalcepina-carousel')
		.directive('avalcepinaCarousel', function($window) {

			return {
				restrict: 'A',
				scope: {
					slides: '=slides'
				},
				template: '<ul style="width: {{totalWidth}}" class="avalcepina-carousel-items"> ' +
					'<li ng-repeat="slide in slides" class="avalcepina-carousel-item" style="width: {{slideWidth}}px">' +
					'<div avalcepina-image /></div></li>' +
					'</ul><div avalcepina-carousel-nav />',

				controller: function($scope, $element) {

					var $win = angular.element($window);
					var ul = angular.element($element.children()[0]);

					$element.addClass('avalcepina-carousel');

					$scope.count = $scope.slides.length;

					// window.console.log('directive', ul);

					function _setWidth() {
						$scope.totalWidth = $element[0].clientWidth * $scope.count +
							'px';
						$scope.slideWidth = $element[0].clientWidth;

						console.log($scope.slideWidth);
						console.log($scope.totalWidth);
						console.log($win.width);

					}

					function _position() {
						// todo: translate3d check for modern stuff instead of using margin
						var left = $scope.active * -$scope.slideWidth + 'px';
						ul.css({
							'margin-left': left
						});

						//setting load status on slides
						$scope.slides[$scope.active].load = true;
						if ($scope.active + 1 < $scope.slides.length) {
							$scope.slides[$scope.active + 1].load = true;
						}
					}

					function _activateImage() {
						$scope.slides[$scope.active].load = true;
						if ($scope.active + 1 < $scope.slides.length) {
							$scope.slides[$scope.active + 1].load = true;
						}

					}

					function _onResize() {
						_setWidth();
						$scope.$apply();
						_position();
					}

					_setWidth();


					$win.on('resize', _onResize);

					$scope.$watch('active', function() {
						_position();
						_activateImage();

					});

					$scope.$on('$destroy', function() {
						// todo; cleasn up private shizzle not being done with NG itself
						$win.off('resize', _onResize);
						$win = ul = null;
					});

					$scope.active = 0; // opening with first slide from array

				}

			};
		});
}());
