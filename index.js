const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})


app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.json())



app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

app.get('/about',(req,res) =>{
    res.render('about')
})

app.get('/contact',(req,res) =>{
    res.render('contact')
})
app.get('/',(req,res) =>{
    res.render('index')
})
app.get('/post',(req,res) =>{
    res.render('post')
})