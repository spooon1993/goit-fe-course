const lint =  require('./lint');
const {test} = require("./test");
const testData = require("./testData");
console.log("hello");


test('TESTING SYNTAX FUNCTION', testData, lint);
