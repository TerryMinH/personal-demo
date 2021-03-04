/*
 * @Author: TerryMin
 * @Date: 2021-03-02 13:36:27
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-02 13:57:14
 * @Description: file not
 */
const { transform } = require('@babel/core');

const fs = require('fs');

const before = fs.readFileSync('./before.js', 'utf8');

const res = transform(`${before}`, {
  plugins: [require('./plugin')]
});

fs.existsSync('./after.js') && fs.unlinkSync('./after.js');

fs.writeFileSync('./after.js', res.code, 'utf8');





