const {Customer} = require('../models')
const {Driver} = require('../models')
const {Order} = require('../models')
const nodemailer = require('nodemailer')
const updateSession = require('../helpers/updateSession')
const dateFormat = require('../helpers/dateFormat')
const emailConfirmation = require('../helpers/emailConfimation')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ridhotass@gmail.com',
        pass: 'thisisgonnabefun'
    }
});

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
                                    .findAll()
                                    .then((drivers) => {
                                        let user = req.session.user
                                        res.render('customerHome.ejs', {user, drivers})
                                    })
                            })
                    })
            })
            .catch((err) => {
                let errMsg = ['invalid email or password']
                res.render('index', {errMsg})
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
                res.render('index')
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

    static AddDriver(req, res){
        Order
            .create({
                CustomerId: req.session.user.id,
                DriverId: req.params.id,
                transactionDate: new Date
            })
            .then(() => {
                Driver
                    .findById(req.params.id)
                    .then((driver) => {
                        let mail = emailConfirmation(driver.firstName, driver.lastName, driver.email) 
                        transporter.sendMail(mail, function (err, info) {
                            if(err)
                              console.log(err)
                            else
                              console.log(info);
                         });
                         Driver
                             .update({
                                 isAvailable: false
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
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static showCustomer(req, res){
        Customer
            .findById(req.params.id)
            .then((customer) => {
                let errMsg =[]
                res.render('customerEdit.ejs', {customer, errMsg})
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static editCustomer(req, res){
        Customer
            .update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                address: req.body.address
            },{
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                Driver
                    .findAll()
                    .then((drivers) => {
                        let user = updateSession(req.body.firstName, req.body.lastName, req.session.user)
                        res.render('customerHome.ejs', {user, drivers})
                    })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static showOrder(req, res){
        Order
            .findAll({
                include:[Driver],
                where:{
                    CustomerId: req.session.user.id
                }
            })
            .then((orders) => {
                res.render('customerOrder', {orders, dateFormat})
            })
            .catch((err) => {
                res.send(err)
            })
    }
}
module.exports = CustomerController