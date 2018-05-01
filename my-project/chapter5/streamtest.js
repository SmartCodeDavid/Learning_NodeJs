var fs = require('fs');

fs.ReadStream('my-file.txt', (err, contents) => {
    //this function will be involved only if all of contents of this file are readed on RAM
});

var stream = fs.createReadStream('NodeJSlargeFile.rar');
var writeStream = fs.createWriteStream(process.argv.slice(2)[0] || 'filetest.txt');

writeStream.on('end', () => {
    console.log('123');
})

stream.on('data', chunk => {
    console.log(`length: ${chunk.length} bytes`);
    write(chunk, ()=>{                        ///copy a file.
    })
})

stream.on('end', chunk => {
    console.log('there will be no more data to read');
})

function write(data, cb){
    if(! writeStream.write(data)){ //true -> finish
        // writeStream.once('drain', cb);
    }else{
        process.nextTick(() => {
            console.log('end of write');
        });
    }
}

