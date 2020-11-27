const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'js/build.[contenthash:6].js',
    path: resolve(__dirname, 'build'),
  },
  devServer: {
    // webpack-dev-server服务的打包后的index.html所在目录
    contentBase: join(__dirname, 'dist'),
    // 启动gzip压缩
    compress: true,
    open: true, // 是否自动打开浏览器
    port: 8081, // 接口
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
            },
          },
          {
            test: /\.html$/,
            // 处理html中的img图片（负责引入img，从而能被html-loader进行处理）
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    //被打包文件
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin(),
  ],
  mode: 'production',
};
