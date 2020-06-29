const express = require('express');
const morgan = require('morgan'); //An NPM package for 3rd party middleware.
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//Connect to mongodb
const dbURI = 'ADD DATABASE INFORMATION';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//Register view engine.
app.set('view engine', 'ejs');
//app.set('views','myViews'); //App engine looks in views folder by default. This method allows you to set your own folder.


//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev')); //Logs server requests for each request



app.get('/', (req, res) => {

    res.redirect('/blogs');

    //res.send('<p>Hello world</p>'); //automatically sets header, infers status code as well
    //res.sendFile('./views/index.html', {root:__dirname});

    //Old logic before we implemented MongoDB.
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
    // ];

    // res.render('index', { title: 'Home', blogs }); //You use the file name minus .ejs
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
    //res.sendFile('./views/about.html', {root:__dirname});
    //res.send('<p>About page</p>'); //automatically sets header, infers status code as well
});



//Redirects
// app.get('/about-us',(req,res) => {
//     res.redirect('/about');
// });


//404 Page
//The use always executes only if the request reaches this point in the code.
//If a response is sent, code stops executing so this app.use method never fires.
//Must be at the bottom of the code, otherwise it will fire before reaching other requests.

//Blog routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
    //Note we must manually add the status code of 404 as Express will not assume a 404.
});

