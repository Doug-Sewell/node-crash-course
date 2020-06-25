const express = require('express');
const morgan = require('morgan'); //An NPM package for 3rd party middleware.


//express app
const app = express();

//Connect to mongodb
const dbURI = 'mongodb+srv://Doug:<password>@node-crash-course-asnyw.mongodb.net/<dbname>?retryWrites=true&w=majority';


//Register view engine.
app.set('view engine','ejs');
//app.set('views','myViews'); //App engine looks in views folder by default. This method allows you to set your own folder.


//listen for requests app
app.listen(3000); //Assumes we want localhost for listening

//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev')); //Logs server requests for each request



app.get('/',(req,res) => {
    //res.send('<p>Hello world</p>'); //automatically sets header, infers status code as well
    //res.sendFile('./views/index.html', {root:__dirname});

    const blogs = [
        {title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title:'Mario finds stars',snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title:'How to defeat Bowser',snippet:'Lorem ipsum dolor sit amet consectetur'}
    ];

    res.render('index',{title:'Home', blogs}); //You use the file name minus .ejs
});

app.get('/about',(req,res) => {
    res.render('about',{title:'About'});
    //res.sendFile('./views/about.html', {root:__dirname});
    //res.send('<p>About page</p>'); //automatically sets header, infers status code as well
});

app.get('/blogs/create',(req,res) => {
    res.render('create',{title:'Create a new blog'});
});



//Redirects
// app.get('/about-us',(req,res) => {
//     res.redirect('/about');
// });


//404 Page
//The use always executes only if the request reaches this point in the code.
//If a response is sent, code stops executing so this app.use method never fires.
//Must be at the bottom of the code, otherwise it will fire before reaching other requests.
app.use((req,res) => {
    res.status(404).render('404',{title:'404'});    
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
    //Note we must manually add the status code of 404 as Express will not assume a 404.
});

