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

		reporters: ['coverage', 'progress', 'html'],

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'app/*.js': ['coverage'],
			'app/components/!(*_test).js': ['coverage']
		},

		// optionally, configure the reporter
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		},

		plugins: [
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-jasmine-html-reporter',
			'karma-coverage'
		]

	});
};
