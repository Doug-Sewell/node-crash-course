const http = require('http');
const fs = require('fs');

//Fires a callback function that has both 
//a request and response object as arguments.
const server = http.createServer((req, res) => {
    console.log('reuest made');
    console.log(req.url, req.method);

    //response headers give the browser some information about
    //what is coming back to it as well as handle cookies.
    
    //Set header content type
    res.setHeader('Content-Type','text/html');

    //Then write what content you want to send

    //Send an HTML file
    fs.readFile('./views/index.html',(err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            //If you are writing only one thing, like
            //a file, you can pass the data to the end method directly.
            //res.write(data);
            res.end(data);
        }

    });

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
