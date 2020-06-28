const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/to-do');

const app = express();

//Connect to database.
const dbURI = 'DATABSE INFO HERE';

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result) => app.listen(3001))
    .catch((err) => console.log(err));

app.use(express.static('./public'));

app.set('view engine','ejs');

//mongoose and mongo sandbox routes

app.get('/add-todo',(req,res) => {
    const todo = new Todo({
        title:'Practice ReactJS',
        category:'Code',
        daysToWork:2,
        notes:'For now, going through NodeJS Crash Course'
    });

    todo.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-todos',(req,res) => {
    Todo.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

app.get('/single-todo',(req,res) => {
    Todo.findById('5ef7e103f8fb965b59670da2')
        .then(result => res.send(result))
        .catch(err => console.log(err));
});



//routes
app.get('/',(req,res) => {
    res.redirect('todos');
});

app.get('/todos',(req,res) => {
    Todo.find()
        .then(result => {
            res.render('index',{todos:result})
        })
        .catch(err => {
            console.log(err);
        })
})

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