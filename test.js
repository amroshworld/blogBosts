const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser: true})

BlogPost.create({
    title: 'amr dreams', 
    body: 'amr will be a millionair inshaa allaah' ,
    username:'amr taha'
},(error,blogpost)=>{
    console.log(error,blogpost)
})