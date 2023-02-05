const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    //console.log("hello, World");
    res.send("Hello, World");
    //res.send(300).send("hello");
    //res.download('server.js')
    //res.render('index');
})

const obj = { newVariable : "Hello world"};

app.get('/home', (req, res) =>{
    res.render('home', obj)
});

app.get('/contact-us', (req, res) =>{
    res.render('contact-us', obj)
});

app.get('/about-us', (req, res) =>{
    res.render('about-us', obj)
});



app.listen(3000);