const app = require('express').Router()
const CustomerController = require('../controller/customerController')

app.post('/login', CustomerController.login)
app.get('/form', CustomerController.formRegister)
app.post('/register', CustomerController.registerCustomer)
// app.get('/register', CustomerController.register)
// app.get('/edit/:id', studentController.editStudent)
// app.post('/edit/:id', studentController.editStudentPos)
// app.get('/delete/:id', studentController.deleteStudent)
// app.get('/edit/:id/add-subject', studentController.addSubject)
// app.post('/edit/:id/add-subject', studentController.addSubjectPos)

module.exports = app