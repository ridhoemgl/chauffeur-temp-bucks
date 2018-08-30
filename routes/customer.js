const Route = require('express').Router()
const CustomerController = require('../controller/customerController')

Route.post('/login', CustomerController.login)
Route.get('/form', CustomerController.formRegister)
Route.post('/register', CustomerController.registerCustomer)
// Route.get('/home', CustomerController.homeCustomer)
Route.get('/logout/:id', CustomerController.logoutCustomer)

module.exports = Route