// let fs = require('fs');
// let data = '';

// let readerStream = fs.createReadStream('input.txt');

// readerStream.setEncoding('UTF8');

// readerStream.on('data', function (chunk) {
//   data += chunk;
// });

// readerStream.on('end', function () {
//   console.log(data);
// });

// readerStream.on('error', function (err) {
//   console.log(err);
// });
// console.log('程序执行完毕');


// let fs=require('fs');
// let data='菜鸟教程官网地址： www.runoob.com';

// let writerStream=fs.createWriteStream('output.txt');
// writerStream.write(data,'UTF8');

// writerStream.end();

// writerStream.on('finish',function(){
//   console.log('写入完成');
// })

// writerStream.on('error',function(err){
//   console.log(err.stack);
// });

// console.log('程序执行完毕');

// let fs = require('fs');
// let readerStream = fs.createReadStream('input.txt');
// let writerStream = fs.createWriteStream('output.txt');
// readerStream.pipe(writerStream);
// console.log('程序执行完毕');

// let fs = require('fs');
// let zlib = require('zlib');
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('文件压缩完成');

