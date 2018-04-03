const lint =  require('./examples/lint');
const {test} = require("./examples/test");
const testData = require("./examples/testData");
console.log("hello");


test('TESTING SYNTAX FUNCTION', testData, lint);

