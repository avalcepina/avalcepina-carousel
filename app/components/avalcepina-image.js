(function() {
  'use strict';
  angular.module('avalcepina-carousel')
    .directive('avalcepinaImage', function($window) {

      return {
        restrict: 'A',
        template: '<img ng-if="slide.load" ng-src="{{src}}" class="avalcepina-image" />',
        controller: function($scope) {

          // MODEL: urlLarge: "test1", urlSmall: "testMobile1"

          // CONFIG
          var width = $window.innerWidth || document.documentElement.clientWidth;

          var $win = angular.element($window);
          var BREAKPOINT = 480;
          var mode = _device();


          function _device() {
            return width <= BREAKPOINT ? 'mobile' : 'desktop';
          }


          function _setImageUrl() {
            if (mode === 'desktop') {
              $scope.src = $scope.slide.urlLarge;
            } else {
              $scope.src = $scope.slide.urlSmall;
            }
          }


          function _onResize() {

            width = $window.innerWidth;

            var newMode = _device();

            if (mode != newMode) {
              mode = newMode;

              $scope.$apply(function() {
                _setImageUrl();
              });
            }
          }

          $scope.src = '#';

          _setImageUrl();

          $win.on('resize', _onResize);

          $scope.$on('$destroy', function() {
            $win.off('resize', _onResize);
            mode = width = $win = BREAKPOINT = null;
          });

        }

      };
    });
}());
