const syntax = (string) => {
    let reg = /[^{}()[\]"']/g;
    let stringReg = string.replace(reg, '');
    let arr = stringReg.split('');
    let maps = {
        ')': '(',
        ']': '[',
        '}': '{',
        '"': '"',
        "'": "'"
    };
    let mapsKey = Object.keys(maps);
    let result = [];
    arr.map( (item, index) => {
        debugger
        if ( !mapsKey.includes(item) ) {
            result.push(item);
        } else if( result[result.length-1] === maps[item] ){
            result.pop();
        } else  if ( result[result.length-1] !== maps[item] ) {
            console.log(`error on ${item} in ${index} index`)
            return false
        }
    } );
    if (result.length === 0) {
        console.log('done');
        return true
    } else {
        return false
    }
};

module.exports = syntax;
