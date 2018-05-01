var fs = require('fs');

//get current directory
var files = fs.readdirSync(__dirname);

files.forEach(file => {
    if(/\.css/.test(file)) {
        fs.watchFile(`${__dirname}/file`, (curr, prev) => {
            console.log(`${file} change`);
        });
    }
})


