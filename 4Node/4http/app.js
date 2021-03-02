/*
 * @Author: TerryMin
 * @Date: 2021-02-21 16:12:16
 * @LastEditors: TerryMin
 * @LastEditTime: 2021-03-01 14:01:14
 * @Description: file not
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain;charset=UTF-8' });

  res.end('你好世界')

})

server.listen(port, hostname, () => {
  process.title = '测试进程Node.js';
  console.log(`process.pid:`, process.pid);
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})