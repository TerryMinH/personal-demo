var ejs = require("ejs");
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    fs.readFile("./views/index.ejs",function(err,data){
        var template = data.toString();//拿到加载的模板
        var data = {
            num:1,
            list:[
                {
                    title:"Think",
                    age:18
                },
                {
                    title:"阳阳",
                    age:19
                },
                {
                    title:"斯琪",
                    age:20
                }

            ]
        }
        var html = ejs.render(template,data);

        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end(html);
    })


});

server.listen(3000,"127.0.0.1");













