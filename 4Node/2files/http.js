/*
 * @Author: TerryMin
 * @Date: 2019-10-21 10:13:53
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-10-27 15:03:16
 * @Description: file not
 */
var PORT = 4000;

var http = require('http');
var url = require('url');
var fs = require('fs');    //fs模块是用于读取文件
var mime = require('./mime').types;
var path = require('path');

var server = http.createServer(function (request, response) {
  console.log(request);
  console.log(request.url);
  var pathname = url.parse(request.url).pathname;
  var realPath = path.join("webapp", pathname);//webapp就是放置一些静态资源文件的目录，这个可以根据自己的项目需求作修改
  console.log(realPath);
  var ext = path.extname(realPath);
  ext = ext ? ext.slice(1) : 'unknown';
  fs.exists(realPath, function (exists) {
    if (!exists) {
      response.writeHead(404, {
        'Content-Type': 'text/plain'
      });

      response.write("This request URL " + pathname + " was not found on this server.");
      response.end('no page');
    } else {
      fs.readFile(realPath, "binary", function (err, file) {
        if (err) {
          response.writeHead(500, {
            'Content-Type': 'text/plain'
          });
          response.end(err);
        } else {
          var contentType = mime[ext] || "text/plain";
          response.writeHead(200, {
            'Content-Type': contentType
          });
          response.write(file, "binary");
          response.end('success');
        }
      });
    }
  });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");