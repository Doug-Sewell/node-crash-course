const express = require('express');

const app = express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.listen(3000);

app.get('/',(req,res) => {
    const books = ['Harry Potter','Lord of the Rings'];
    res.render('index',{books});
});

app.get('/information',(req,res) => {
    res.redirect(301, '/');
});

app.use((req,res) => {
    res.status(404).render('404');
});



/*
const express = require('express');

const app = express();
app.set('view engine','ejs');
app.listen(3000);

app.get('/',(req,res) => {
    res.render('index',{title:'Home'});
});

app.get('/about',(req,res)=> {
    res.render('about',{title:'About'});
});

app.use((req,res) => {
    res.status(404).render('404',{title:'Not Found'});
});

//redirect
app.get('/about-us',(req,res) => {
    res.redirect('about');
})
*/