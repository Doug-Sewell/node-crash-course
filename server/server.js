const http = require('http');

//Fires a callback function that has both 
//a request and response object as arguments.
const server = http.createServer((req, res) => {
    console.log('reuest made');
});

//Allows server to lsiten for requests and
//for you to pick the port. The third argument
//callback function is just for a confirmation
//that the server is listening for requests.
//Port number 3000 is common for local 
//web development. As long as it doesn't clash
//with another application, any port is fine.

server.listen(3000,'localhost',() => {
    console.log('listening for requests on port 3000');
});
