var http = require("http");
var fs = require("fs");
http.createServer(function (req,res){
    if(req.url == "/products"){
        fs.readFile('product.txt', 'utf-8', function (res,data){
            res.end(data);
        })
    }
    else{
        escape.end("file not found...")
    }
}).listen(9000)

