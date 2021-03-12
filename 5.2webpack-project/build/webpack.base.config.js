/*
 * @Author: TerryMin
 * @Date: 2021-03-12 16:02:24
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-12 16:02:24
 * @Description: file not
 */

const utils = require("./utils")

module.exports = {
    // 入口
    entry: {
        app: "./src/index" 
    },
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/" // 打包后的资源的访问路径前缀
    },
    // 模块
    module:{

    },
}

