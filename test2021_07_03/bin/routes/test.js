const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()

router.get('/', async (req, res) => {
  const todos = await Todo.find({})

  res.render('index', {
    title: 'Test list',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create form',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const test = new Test({
    title: req.body.title
  })

  router.get('/myapi', (req, res) => {
    res.render('myapi', {
      title: 'Catch Api',
      isMyapi: true
    })
  })
  

  await test.save()
  res.redirect('/')
})

router.post('/complete', async (req, res) => {
  const test = await Test.findById(req.body.id)

  todo.completed = !!req.body.completed
  await test.save()

  res.redirect('/')
})

module.exports = router
