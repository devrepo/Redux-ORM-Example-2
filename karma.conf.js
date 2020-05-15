const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({ browsers: ['Chrome'],
    // karma only needs to know about the test bundle
        files: [
            './*.bench.js'
        ],
        captureTimeout: 100000,
        browserNoActivityTimeout: 20000,
        frameworks: [
            'benchmark'
        ],
        customLaunchers: {
            'Chrome-Headless': {
                base: 'ChromeHeadless',
                flags: ['--headless', '--remote-debugging-port=9222', '--no-sandbox', '--disable-gpu']
            }
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-benchmark',
            'karma-es6-shim',
            'karma-webpack',
            'karma-benchmark-reporter'
        ],
        // run the bundle through the webpack and sourcemap plugins
        preprocessors: {
            './*.bench.js': ['webpack']
        },
        reporters: ['benchmark'],
        singleRun: false,
        // webpack config object
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        benchmarkPlotlyReporter: {
            username: 'devender123',
            apiKey: 'aS1q3yxBz4jYJ5Z8LahJ',
            cloudFilename: 'benchmark_two',
            imageFilename: 'two.png'
        }
    });
};
