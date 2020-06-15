const fs = require('fs');

//reading files
/*const file = fs.readFile('./docs/blog1.txt',(err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString()); //We get a buffer here which is why we use toString() to turn the buffer into a string.
});
*/

//writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
//     console.log('file was written');
// });

//directories
if (!fs.existsSync('./assets')) { //Using logic that if a folder DOESN'T exist, then we'll create the folder.
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err); //If folder already exists, then you'll see this error.
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted.')
    })
}

//deleting files
if(!fs.existsSync('./docs/deleteme.txt')) {
    fs.writeFile('./docs/deleteme.txt','Delete this!', () => {
        console.log('file created');
    });
}

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt',(err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });
} 