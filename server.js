const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    const articles = [{
        title: 'test article 1',
        createdAt: new Date(),
        description: 'test1'
    },
    {
        title: 'test article 2',
        createdAt: new Date(),
        description: 'test2'
    }
]
    res.render('articles/index', {articles: articles})

})

app.use('/articles', articleRouter)


app.listen(9000)