var fs = require('fs');
require('colors');

fs.readdir(__dirname, function(err, files){
  if(err == null) {
    for (var fIndex in files) {
      if (files.hasOwnProperty(fIndex)) {
        console.log(files[fIndex].cyan);
      }
    }
  }

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
      const chunk = data;
      if(chunk !== null) {
        let path = `${process.cwd()}/${chunk.trim()}`;
        fs.stat(path, function(err, stats){
            if(!err) {
              if(stats.isFile()) { ///file
                //console.log(stats);
                process.stdin.pause();
                //show info about the file
                fs.readFile(path, {encoding:'utf8', flag:'r'}, (err, data) => {
                  if(err) throw err;
                    console.log(data);
                });
              }else if(stats.isDirectory()){  ///directory -- list files under this directory
                  fs.readdir(path, (err, files) => {
                    files.forEach(function(file){
                      console.log(file);
                    })
                    process.stdin.pause();
                  });
              }else{
                //
              }
            }else if(err.code === "ENOENT"){
                console.log("select a file");
            }
        });
      }
  });
  console.log("select a file");


  // process.stdin.on('readable', () => {
  //     const chunk = process.stdin.read();
  //     if(chunk !== null) {
  //       fs.stat(`${process.cwd()}/${chunk.trim()}`, function(err, stats){
  //           if(!err && stats.isFile()) {
  //               console.log(stats);
  //               process.stdin.pause();
  //           }
  //       });
  //     }
  //     console.log("select a file");
  // });
});
