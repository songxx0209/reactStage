// const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackDevServer = require('webpack-dev-server');

// const autoprefixer = require('autoprefixer');

const extractLess = new ExtractTextPlugin({
  filename: '[name].css',
  // disable: process.env.NODE_ENV === "development", // 是否禁用次插件
});

module.exports = {
  entry: './app/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    // open: true,
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.less$/,
        // loader: 'style-loader!css-loader!sass-loader!postcss-loader'
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: [{ loader: 'css-loader', options: { module: true } }, 'postcss-loader', 'less-loader'],
        }),
      },
      {
        test: /\.js[x]?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [
              // 此插件允许使用 async await
              ['transform-runtime', {
                polyfill: false,
                regenerator: true,
              }],
            ],
          },
      },
      // {
      //   test: /\.less$/,
      //   use: extractLess.extract({
      //       use: [{
      //           loader: "css-loader",
      //           // 开启 css-module，将css名转换为一个唯一的值
      //           options: { modules: true, importLoaders: 1 }
      //       }, {
      //           loader: "less-loader"
      //       }],
      //       // use style-loader in development
      //       fallback: "style-loader"
      //   })
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      title: 'phicomm backserver',
      hash: true, // 在文件名后面生成 hash值,这样的好处是覆盖式部署不会生成很多相同名字的文件，减小服务器内存压力
      inject: false,
    }),
    extractLess,
  ],

};
