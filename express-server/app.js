const express = require('express');

//express app
const app = express();

//listen for requests app
app.listen(3000); //Assumes we want localhost for listening

app.get('/',(req,res) => {
    //res.send('<p>Hello world</p>'); //automatically sets header, infers status code as well
    res.sendFile('./views/index.html', {root:__dirname});
});

app.get('/about',(req,res) => {
    res.sendFile('./views/about.html', {root:__dirname});
    //res.send('<p>About page</p>'); //automatically sets header, infers status code as well
});

//Redirects
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});


//404 Page
//The use always executes only if the request reaches this point in the code.
//If a response is sent, code stops executing so this app.use method never fires.
//Must be at the bottom of the code, otherwise it will fire before reaching other requests.
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html',{root:__dirname});
    //Note we must manually add the status code of 404 as Express will not assume a 404.
});