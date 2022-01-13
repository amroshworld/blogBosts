const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted: { /* can declare property type with an object 
        like this because we need 'default' */
        type: Date,
        default: new Date()
    },
    image: String
})


const blogPost = mongoose.model('BlogPost', blogPostSchema)

module.exports = blogPost
