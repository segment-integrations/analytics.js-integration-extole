/* eslint-env node */
'use strict';

module.exports = function(config) {
  config.set({
    browserDisconnectTolerance: 5,
    browserDisconnectTimeout: 100000,
    browserNoActivityTimeout: 100000,

    files: [
      'test/**/*.test.js'
    ],

    browsers: ['PhantomJS'],

    frameworks: ['browserify', 'mocha'],

    reporters: ['spec', 'coverage'],

    preprocessors: {
      'test/**/*.js': 'browserify'
    },

    client: {
      mocha: {
        grep: process.env.GREP,
        reporter: 'html',
        timeout: 100000
      }
    },

    browserify: {
      debug: true,
      transform: [
        [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },

    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html' },
        { type: 'json' }
      ]
    }
  });
};
