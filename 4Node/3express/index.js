/*
 * @Author: TerryMin
 * @Date: 2020-09-09 14:06:45
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-09-16 10:49:05
 * @Description: file not
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Terr");
  // let updateStr = { $set: { "url": "https://www.runoob.com/cn","likes":200 } };

  // var myobj = { name: "菜鸟教程", url: "www.runoob" };
  // dbo.collection("site").updateOne({ "name": '菜鸟教程' }, updateStr, function (err, res) {
  //   if (err) throw err;
  //   console.log("文档更新成功");
  //   db.close();
  // });

  var myobj = [
    { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn', "like": 100 },
    { name: 'Google', url: 'https://www.google.com', type: 'en', "like": 20 },
    { name: 'Facebook', url: 'https://www.google.com', type: 'en', "like": 400 }
  ];
  dbo.collection("site").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("插入的文档数量为：" + res.insertedCount);
    db.close();
  })

});