const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const articleRoutes = require('./routes/article')
//const configMongoDB = require('./config/mongoDBConfig')
const configcloudMongoDb = require('./config/mongoCloudConfig')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(articleRoutes)
//app.use(configMongoDB)
app.use(configcloudMongoDb)
/*
async function start() {
  try {
    await mongoose.connect(
     'mongodb+srv://sjen:<password>@cluster0.iih5n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}
*/
const init=()=>{


}

init()
