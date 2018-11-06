module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            'js/*.js': ['coverage']
        },
        files: [
            'js/custom-matchers.js',
            'js/*.js',
            'js/*.spec.js',
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        color: true,
        // singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                { type: 'html', subdir: 'html' }
            ]
        }
        
    });
}; 