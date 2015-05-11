describe(
  'avalcepina-carousel (directive of avalcepina-carousel)',
  function() {
    var $scope;
    var $el;

    beforeEach(module('avalcepina-carousel'));

    beforeEach(inject(function($compile, $rootScope) {

      $scope = $rootScope.$new();
      $scope.slides = [{
        urlLarge: 'http://lorempixel.com/800/320/sports/5',
        urlSmall: 'http://lorempixel.com/400/160/sports/5'
      }, {
        urlLarge: 'http://lorempixel.com/800/320/sports/3',
        urlSmall: 'http://lorempixel.com/400/160/sports/3'
      }, {
        urlLarge: 'http://lorempixel.com/800/320/sports/7',
        urlSmall: 'http://lorempixel.com/400/160/sports/7'
      }, {
        urlLarge: 'http://lorempixel.com/800/320/sports/9',
        urlSmall: 'http://lorempixel.com/400/160/sports/9'
      }, {
        urlLarge: 'http://lorempixel.com/800/320/sports/1',
        urlSmall: 'http://lorempixel.com/400/160/sports/1'
      }, {
        urlLarge: 'http://lorempixel.com/800/320/sports/4',
        urlSmall: 'http://lorempixel.com/400/160/sports/4'
      }];


      var html = '<div avalcepina-carousel slides="slides">' +
        '</div>';

      $el = angular.element(html);
      $compile($el)($scope);
      $scope.$digest();
    }));

    it('exposes a .slides on its scope', inject(function() {
      expect($scope.slides)
        .toBeDefined();
    }));
  });
