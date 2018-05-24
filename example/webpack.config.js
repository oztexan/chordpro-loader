// markdown conver to html
module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.(pro|cho|chordpro)$/,
      use: [{
        loader: 'json-loader'
      },
      {
        loader: require.resolve('../index.js')
      }
      ]
    }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
};
