const {Customer} = require('../models')
const {Driver} = require('../models')
// const {StudentSubject} = require('../models')

class CustomerController{

    static login(req, res){
        //  check username & password valid 
        Customer
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then((customerBeforeUpdate) => {
                //  update islogin = true
                Customer
                    .update({
                        isLogin: true
                    },{
                        where:{
                            id: customerBeforeUpdate.id
                        }
                    },)
                    .then(() => {
                        // findOne (customer updated data)
                        Customer
                            .findOne({
                                where:{
                                    id: customerBeforeUpdate.id
                                }
                            })
                            .then((customer) => {
                                req.session.user = {
                                    id: customer.id,
                                    firstName: customer.firstName,
                                    lastName: customer.lastName,
                                    role: customer.role
                                }
                                // list all drivers (isAvailable = true)
                                Driver
                                    .findAll({
                                        where:{
                                            isAvailable: true
                                        }
                                    })
                                    .then((drivers) => {
                                        let user = req.session.user
                                        res.render('customerHome.ejs', {user, drivers})
                                    })
                            })
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static formRegister(req, res){
        let errMsg=[]
        res.render('register.ejs', {errMsg})
    }

    static registerCustomer(req, res){
        Customer
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address,
                createdAt: new Date,
                updatedAt: new Date,
            })
            .then(() => {
                res.render('index.ejs')
            })
            .catch((err) => {
                let errMsg=[]
                for(let i = 0 ; i < err.errors.length ; i++){
                    errMsg.push(err.errors[i].message)
                }
                res.render('register.ejs', {errMsg})
            })
    }

    static logoutCustomer(req, res){
        //  update islogin = false & redirect to login page
        Customer
            .update({
                isLogin: false
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}
module.exports = CustomerController