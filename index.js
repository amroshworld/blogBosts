const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const blogPosts = require('./models/BlogPost')
const fileUpload = require('express-fileupload')
const newPostController = require('./controllers/newPost')
const newContactController = require('./controllers/contact')
const newaboutController = require('./controllers/about')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

const middleWareVal = require('./middleWare/middleWareVal')


app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/post/store',middleWareVal)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})

app.get('/about', newaboutController)

app.get('/contact', newContactController)

app.get('/', homeController)

app.post('/', async (req, res) => {
    var query = req.body.title
    const blogposts = await blogPosts.find({ title: new RegExp(query) })

    console.log(blogposts)
    res.render('index', {
        blogposts
    })
})
app.get('/post/:id', getPostController)
app.get('/posts/new',newPostController)

app.post('/post/store', storePostController)






