

import test from 'ava';
import webpack from 'webpack';
import path from 'path';
import deerstand from './DeerStand';

test.cb((t) => {
  webpack({
    entry: path.resolve(__dirname, './assets/Deer Stand.cho'),
    module: {
      rules: [{
        test: /\.(pro|cho|chordpro)$/,
        use: [
          {
            loader: 'json-loader'
          },
          {
            loader: require.resolve('../index.js')
          }
        ]
      }]
    },
    output: {
      libraryTarget: 'commonjs2',
      path: `${__dirname}/output`,
      filename: 'bundle.js'
    }
  }, (err, stats) => {
    if (err) {
      return t.end(err);
    }
    if (stats.hasErrors()) {
      return t.end(stats.compilation.errors[0]);
    }
    if (stats.hasWarnings()) {
      return t.end(stats.compilation.warnings[0]);
    }

    const bundle = require('./output/bundle');
    t.is(JSON.stringify(bundle), JSON.stringify(deerstand));

    t.end();
  });
});
