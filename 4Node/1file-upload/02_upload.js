/*
 * @Author: TerryMin
 * @Date: 2019-10-27 11:27:57
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-10-27 11:43:39
 * @Description: file not
 */
var formidable = require('formidable'),//处理表单数据
  http = require('http'),
  util = require('util');//util：node的工具类，无需install
var path = require("path");
var sd = require("silly-datetime");
var fs = require("fs");//fileSystem：文件系统

http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    //Creates a new incoming form.
    var form = new formidable.IncomingForm();
    form.uploadDir = "./static/images";//注意目录必须存在，否则报错/不能上传成功

    form.parse(req, function (err, fields, files) {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.write('received upload:\n\n');
      var ran = parseInt((Math.random() * 10000).toFixed(0));
      var newDate = sd.format(new Date(), "YYYYMMDDHHmmss");
      console.log(files);
      var extname = path.extname(files.uploadImg.name);//传入URL或文件名
      var oldpath = __dirname + "/" + files.uploadImg.path;//获取之前的URL
      /*
          newpath：要被修改的路径
          组成部分：当前路径+保存路径+当前时间+随机数字+后缀名
      */
      var newpath = __dirname + "/static/images/" + newDate + ran + extname;

      //文件名：年月日小时分钟秒钟+4位随机数
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          throw Error("改名字没改成功，依然姓王");
        }
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("success");
      });
      console.log("标题：" + fields.title);
      console.log("年龄：" + fields.age);
      console.log(files);
      //res.end("success");
      console.log(fields);//直接输出fields会输出“Object object”
      //把两个对象合并，并以字符串的形式展现
      res.end(util.inspect({ fields: fields, files: files }));
    });

    return;
  }
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="title"><br>' +
    '<input type="text" name="age"><br>' +
    '<input type="file" name="upload" multiple="multiple"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
}).listen(8000);
console.log('runing')