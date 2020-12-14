/*
 * @Author: TerryMin
 * @Date: 2019-10-27 10:25:50
 * @LastEditors: TerryMin
 * @LastEditTime: 2019-10-27 11:34:12
 * @Description: file not
 */
let http = require('http');
let util = require('util');
let formidable = require('formidable');

let app = http.createServer(function (req, res) {
  console.log(111);
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fileds, files) {
      res.writeHead(200, { 'content-type': 'text-plain' });
      res.write('recevied upload:\n\n');
      console.log("标题：" + fileds.title);
      console.log("年龄：" + fileds.age);
      res.end(util.inspect({ fileds: fileds, files: files }))
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
});

app.listen(3000)


