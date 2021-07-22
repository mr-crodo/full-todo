const express = require('express')
const mongoose = require('mongoose')
const exphns = require('express-handlebars')
const path = require('path')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphns.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
// for css
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://nasib:Umsjvn6517@cluster0.i87co.mongodb.net/todos',
       {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log('Server has been started qadan alem...');
    })
  } catch (err) {
    console.log(err);
    
  }
}


start()
