var ejs = require("ejs");

var str = "好开心，今天中了<%= num %>等奖";

var data = {
    num:1
}

var html = ejs.render(str,data);//传入渲染的字符，数据

console.log(html);
























