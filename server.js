var http = require('http');
function onRequest(req,res)
{
    var fs = require('fs');
    fs.readFile('./Coffee_App.html',null,function(error,data){
        res.writeHead(200,{'content-type':'text/html'});
        if(error)
        {
            res.writeHead(404);
            res.write('File not Found!');
        }
        else
        {
            res.write(data);
        }
        res.end();
    });
}
http.createServer(onRequest).listen(5000);
console.log("server listeing on port 5000...");