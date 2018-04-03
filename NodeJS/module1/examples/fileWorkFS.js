const fs = require('fs');

fs.readFile( './testFiles/example.js', (err, data) => {
   if( err ) {
       throw new Error(err)
   }
   const prepared = data.toString();
   

   debugger;
} )
