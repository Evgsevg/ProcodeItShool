const { Router } = require('express')
const Article = require('../models/Article')

const router = Router()

router.get('/', async (req, res) => {
  const todos = await Article.find({})

  res.render('index', {
    title: 'Articles list',
    isIndex: true,
    todos
  })
})


router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create article',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    author: req.body.author,
    article:req.body.article,
    description:req.body.description,
    date_create:req.body.date_create,
    my_id: req.body.description,

  })

  await article.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const todo = await Article.findById(req.body.id)

  todo.completed = !!req.body.completed
  await article.save()

  res.redirect('/')
})

module.exports = router
