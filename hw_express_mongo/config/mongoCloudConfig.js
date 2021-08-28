module.exports=async function start() {
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