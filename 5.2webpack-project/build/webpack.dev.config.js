/*
 * @Author: TerryMin
 * @Date: 2021-03-12 16:03:19
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-12 16:08:55
 * @Description: file not
 */
const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = webpackMerge.merge(baseWebpackConfig, {
  // 指定构建环境  
  mode: "development",
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
      template: 'index.html',// html模板
      inject: true, // true：默认值，script标签位于html文件的 body 底部
    })
  ],
  // 开发环境本地启动的服务配置
  devServer: {

  }
});


