/*
 * @Author: TerryMin
 * @Date: 2021-03-12 16:00:45
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-12 16:02:52
 * @Description: file not
 */
const path = require("path");

exports.resolve = function (dir) {
  return path.resolve(__dirname, dir);
}