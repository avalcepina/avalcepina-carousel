(function(angular) {
	angular.module('myApp', ['avalcepina-carousel']).controller('myCtrl', function($scope) {
		
		$scope.foo = 123;
		$scope.bar = 3456;

		$scope.slides = [
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/5',
				urlSmall : 'http://lorempixel.com/400/160/sports/5'
			}, 
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/3',
				urlSmall : 'http://lorempixel.com/400/160/sports/3'
			}, 
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/7',
				urlSmall : 'http://lorempixel.com/400/160/sports/7'
			},
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/9',
				urlSmall : 'http://lorempixel.com/400/160/sports/9'
			},
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/1',
				urlSmall : 'http://lorempixel.com/400/160/sports/1'
			},
			{
				urlLarge : 'http://lorempixel.com/800/320/sports/4',
				urlSmall : 'http://lorempixel.com/400/160/sports/4'
			}
		];

		// window.console.log($scope);
		
	});
})(angular);