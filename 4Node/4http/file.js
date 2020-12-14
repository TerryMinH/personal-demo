const fs = require('fs');

fs.readFile('input.text', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('异步读取数据:' + data.toString());
});

const data = fs.readFileSync('input.text');
console.log('同步读取数据:' + data.toString());
console.log('程序执行完毕')
