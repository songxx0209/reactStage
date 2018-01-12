const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

var autoprefixer = require('autoprefixer');

const extractLess = new ExtractTextPlugin({
  filename: "[name].css",
  // filename: "[name].[contenthash].css",
  // disable: process.env.NODE_ENV === "development",
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
    // historyApiFallback: {},
    // proxy: {},
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?minimize'
      },
      {
        test: /\.less$/,
        // loader: 'style-loader!css-loader!sass-loader!postcss-loader'
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // resolve-url-loader may be chained before sass-loader if necessary
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: [
                    autoprefixer({
                      browsers: ['last 2 versions', 'Android >= 4.0'],
                    }),
                  ]
                }
              },
              'less-loader'
            ]
        })
      },
      {
        test: /\.js[x]?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets: ['es2015', 'stage-0', 'react'],
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
      // {
      //   test: /\.(less|css)$/,
      //   use: extractLess.extract({
      //     fallback: "style-loader", 
      //     use: [
      //       {
      //         loader: 'css-loader', options: { module: true },
      //       }, {
      //         loader: "postcss-loader"
      //       }, {
      //         loader: "less-loader"
      //       }
      //     ]
      //   })
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './app/index.html',
        title: 'phicomm backserver',
        hash: true, // 在文件名后面生成 hash值,这样的好处是覆盖式部署不会生成很多相同名字的文件，减小服务器内存压力
        inject: false
    }),
    // // 部分 loader 配置信息
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //       postcss: function () {
    //           return [autoprefixer({
    //               browsers: ['last 2 versions', 'Android >= 4.0'],
    //               //是否美化属性值 默认：true 
    //               cascade: true,
    //               //是否去掉不必要的前缀 默认：true
    //               remove: false
    //           })];
    //       } 
    //   }
    // }),
    extractLess,
  ]

}