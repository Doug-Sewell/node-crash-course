const fs = require('fs');

// Streams => Start using data, before it has finished loading.

// Buffer => Chunks of data that are part of the stream. Every time
// the buffer fills, it gets sent down the stream.



//Note the second argument below is optional. You don't need to encode it if you don't want to. You coudl also use toString() on the buffer.
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8'}); 
const writeStream = fs.createWriteStream('./docs/blog3.txt');



//The below"on" method is an event listener for
// a data event that executes each time
//you get a chunk of data.

// readStream.on('data',(chunk) => {
//     console.log('------new chunk');
//     console.log(chunk); 
//     /*NOTE that in readStream, 
//     that second argument with the object is optional 
//     in which case you could do .toString() on the chunk above.
//     However, by encoding the buffer as it comes in, you don't
//     need to use toString().
//     */
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);
