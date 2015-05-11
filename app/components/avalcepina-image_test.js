'use strict';

describe('avalcepina-carousel module', function() {
  beforeEach(module('myApp'));
  var $compile, $rootScope;

  describe('avalcepina-image directive', function() {

    beforeEach(inject(function(_$compile_, _$rootScope_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
      expect(true)
        .toBeTruthy();

      // Compile a piece of HTML containing the directive
      var element = $compile('<a-great-eye></a-great-eye>')(
        $rootScope);
      // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
      $rootScope.$digest();
      // Check that the compiled element contains the templated content
      expect(element.html())
        .toContain('lidless, wreathed in flame, 2 times');
    });
  });
});
