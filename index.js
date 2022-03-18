const http = require("http");
var port = process.env.PORT || 8080;
var server = http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.statusCode = 200;
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>Hello World ! / </h2>");
        res.end();
    }
    if(req.url=="/about")
    {
        res.statusCode = 200;
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>Hello World ! about </h2>");
        res.end();
    }
    if(req.url=="/Search")
    {
        res.statusCode = 200;
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h2>Hello World ! Search </h2>");
        res.end();
    }
});

server.listen(port,()=>{
    console.log("Connected to " + port + "...");
})