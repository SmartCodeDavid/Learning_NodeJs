process.on('message', function(m, tcp) {
    if(m === 'server') {
        tcp.on('connection', function(socket) {
            socket.end('handle by child with pid ' + process.pid +'\n');
        });
    }
});

process.on('SIGTERM', function() {
    console.log('Got a SIGTERM, exiting...');
    process.exit(1);
});

