module.exports =  (req, res, next) => {
    if (req.body.title == null || req.files == null || req.body.body == null ) {
        console.log('value is null')
        return res.redirect('/posts/new')
    }
    next()
}