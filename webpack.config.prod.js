/**
 * WEBPACK CONFIG
 *
 * Notes on config properties:
 *
 * 'entry'
 * Entry point for the bundle.
 *
 * 'output'
 * If you pass an array - the modules are loaded on startup. The last one is exported.
 *
 * 'resolve'
 * Array of file extensions used to resolve modules.
 *
 * 'NODE_ENV'
 * React relies on process.env.NODE_ENV based optimizations.
 * If we force it to production, React will get in an optimized manner.
 * This will disable some checks (eg. property type checks) and give you a smaller build and improved performance.
 *    Note: That JSON.stringify is needed as webpack will perform string replace "as is".
 *    In this case we'll want to end up with strings as that's what various comparisons expect, not just production.
 *    Latter would just cause an error.
 *
 * OccurrenceOrderPlugin
 * Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids.
 * This make ids predictable, reduces to total file size and is recommended.
 *
 * UglifyJsPlugin
 * Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
 *    - 'compress'
 *      Compressor is a tree transformer which reduces the code size by applying various optimizations on the AST.
 *
 * 'babel'
 * Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5 source
 * that is actually delivered to the end user browser.
 */

/* eslint-disable no-var */
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '/assets/js/index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new ExtractTextPlugin('./assets/css/main.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file?name=./assets/img/[name].[ext]'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-normalize'),
      require('postcss-nested')
    ]
  }
}
