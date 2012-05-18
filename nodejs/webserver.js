var http = require('http');
var server = http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
		      res.end('Hello World\n');
})

function start() {
	server.listen(1337, "127.0.0.1");
}
exports.start = start;
