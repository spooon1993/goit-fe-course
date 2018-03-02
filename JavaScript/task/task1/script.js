let arr = [ [1,2], [3,4,5], [0] ];
console.log(arr);


let result = arr.reduce(function (acum, item) {
    return acum.concat(item);
});
console.log('result', result);

