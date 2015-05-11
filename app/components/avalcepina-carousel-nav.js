(function() {
  'use strict';

  angular.module('avalcepina-carousel')
    .directive('avalcepinaCarouselNav', function() {

      return {
        restrict: 'A',
        template: '<div class="avalcepina-carousel-nav">' +
          '<div class="avalcepina-carousel-nav-wrapper"><ul class="avalcepina-carousel-nav-items"> ' +
          '<li ng-repeat="slide in slides" class="avalcepina-carousel-nav-item" ng-class="{\'avalcepina-carousel-nav-item-active\': $index == active}">' +
          '<span class="avalcepina-carousel-nav-round" ng-click="selectSlide($index)"></span>' +
          '</li>' +
          '</ul></div></div>' +
          '<span class="avalcepina-carousel-nav-prev" ng-click="prevSlide()"></span>' +
          '<span class="avalcepina-carousel-nav-next" ng-click="nextSlide()"></span>',
        controller: function($scope) {

          // window.console.log('navigation', $scope, $element);
          // scope.active

          $scope.selectSlide = function(id) {
            $scope.active = id;
          };

          $scope.prevSlide = function() {
            var prev = $scope.active - 1;
            if (prev < 0) {
              prev = $scope.count - 1;
            }
            $scope.active = prev;
          };

          $scope.nextSlide = function() {
            var next = $scope.active + 1;
            if (next >= $scope.count) {
              next = 0;
            }
            $scope.active = next;
          };

        }

      };
    });
}());
