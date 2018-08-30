const {Driver} = require('../models')
const {Customer} = require('../models')


class DriverController{

    static add(req, res){
        Driver
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.birthYear,
                email: req.body.email,
                phone: req.body.phone
            })
            .then(() => {
                Driver
                    .findAll()
                    .then((drivers) => {
                        let user = req.session.user
                        res.render('customerHome.ejs', {user, drivers})
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static showDriver(req, res){
        Driver
            .findOne({
                where:{
                    id: req.params.id
                }
            })
            .then((driver) => {
                res.render('driverEdit.ejs', {driver})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static editDriver(req, res){
        Driver
            .update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                Driver
                    .findAll()
                    .then((drivers) => {
                        let user = req.session.user
                        res.render('customerHome.ejs', {user, drivers})
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static deleteDriver(req, res){
        Driver
            .destroy({
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                Driver
                    .findAll()
                    .then((drivers) => {
                        let user = req.session.user
                        res.render('customerHome.ejs', {user, drivers})
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }
}
module.exports = DriverController