const app = require('express').Router()
const studentController = require('../controller/studentController')

app.get('/', studentController.listStudent)
app.get('/edit/:id', studentController.editStudent)
app.post('/edit/:id', studentController.editStudentPos)
app.get('/delete/:id', studentController.deleteStudent)
app.get('/edit/:id/add-subject', studentController.addSubject)
app.post('/edit/:id/add-subject', studentController.addSubjectPos)

module.exports = app