
var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response){
    response.end("You're great!");
};

function handleRequest2(request, response){
    response.end("You'll find love someday.");
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT1, function(){
    console.log("You're super ok!");
});

server2.listen(PORT2, function(){
    console.log("You're the best!");
})