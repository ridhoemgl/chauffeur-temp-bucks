const Route = require('express').Router()
const DriverController = require('../controller/driverController')

Route.post('/add/:id', DriverController.add)
Route.get('/edit/:id', DriverController.showDriver)
Route.post('/edit/:id', DriverController.editDriver)
Route.get('/delete/:id', DriverController.deleteDriver)

module.exports = Route