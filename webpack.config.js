const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    //入口文件的路径
    entry: "./src/index.tsx",
    output: {
      //打包的输出路径
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
    },
    // 添加需要解析的文件格式
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.css', 'less']
    },
    
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        {
          test: /\.tsx?$/,
          use: ['ts-loader']
        },
        { 
          test: /\.(less|css)$/,
          include: path.join(__dirname, 'src'),
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            { loader: "less-loader" }
          ]
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: '蚂蚁',
        template: './index.html',
      })
    ],
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
    },
    // 启用sourceMap
    devtool: "source-map",
}