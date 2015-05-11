module.exports = function(config) {
	config.set({
		//singleRun: true,
		basePath: './',

		files: [
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/components/avalcepina-module.js',
			'app/components/avalcepina-carousel.js',
			'app/components/avalcepina-carousel-nav.js',
			'app/components/avalcepina-image.js',
			'app/avalcepina-carousel-example.js',

			// tests
			'app/components/avalcepina-image_test.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-junit-reporter'
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
