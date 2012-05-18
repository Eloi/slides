var net = require('net');

var server = net.createServer(function (socket) {
	  socket.write("Echo server\r\n");
	    socket.pipe(socket);
});

server.listen(2525, "127.0.0.1");
