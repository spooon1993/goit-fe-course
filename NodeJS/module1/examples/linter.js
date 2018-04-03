const fs = require('fs');
const syntax = require('./lint')

const lint = (path) => {
    if(!path) return false
    fs.readFile(path, ( err, data ) => {
        if (err) throw new Error(err);
        const str = data.toString();


    })
}