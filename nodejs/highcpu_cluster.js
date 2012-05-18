var cluster = require('cluster');
var numCPUs = 2

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
} else {
    for(var i=0; i<10000000000; i++) {
	var test = i*i;
	//console.log(i);
    }
}
