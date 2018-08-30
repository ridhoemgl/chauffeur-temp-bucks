const app = require('express').Router()
const teacherController = require('../controller/teacherController')

app.get('/', (req, res) => {
    res.send('helo teacher')
})

module.exports = app