const Route = require('express').Router()
const CustomerController = require('../controller/customerController')

Route.post('/login', CustomerController.login)
Route.get('/form', CustomerController.formRegister)
Route.post('/register', CustomerController.registerCustomer)
Route.get('/driver/add/:id', CustomerController.AddDriver)
Route.get('/edit/:id', CustomerController.showCustomer)
Route.post('/edit/:id', CustomerController.editCustomer)
Route.get('/order', CustomerController.showOrder)
Route.get('/logout/:id', CustomerController.logoutCustomer)

module.exports = Route