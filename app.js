const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const customerRoutes = require('./routes/customer')
const teacherRoutes = require('./routes/teacher')
const subjectRoutes = require('./routes/subject')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/customer', customerRoutes)
// app.use('/teacher', teacherRoutes)
// app.use('/subject', subjectRoutes)


app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.get('/', (req,res) => {
     res.render('index')
})