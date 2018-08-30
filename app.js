const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const customerRoutes = require('./routes/customer')
const driverRoutes = require('./routes/driver')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'supir tembak',
    resave: false,
    saveUninitialized: true
  }))

app.use('/customer', customerRoutes)
app.use('/driver', driverRoutes)

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.get('/', (req,res) => {
     res.render('index')
})