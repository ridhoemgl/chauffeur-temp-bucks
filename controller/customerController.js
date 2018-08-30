const {Customer} = require('../models')
<<<<<<< HEAD
const {Driver} = require('../models')
=======
// const {Subject} = require('../models')
>>>>>>> 82e6c5e65cda72b76c20094b3c71e07f1b11c62e
// const {StudentSubject} = require('../models')

class CustomerController{

    static login(req, res){
<<<<<<< HEAD
        //  check username & password valid 
=======
>>>>>>> 82e6c5e65cda72b76c20094b3c71e07f1b11c62e
        Customer
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
<<<<<<< HEAD
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
=======
            .then((data) => {
                if(data){
                    res.send(data)
                }else {
                    res.render('index')
                }
            })
            .catch((err) => {

>>>>>>> 82e6c5e65cda72b76c20094b3c71e07f1b11c62e
            })
    }

    static formRegister(req, res){
<<<<<<< HEAD
        let errMsg=[]
        res.render('register.ejs', {errMsg})
=======
        res.render('register.ejs')
>>>>>>> 82e6c5e65cda72b76c20094b3c71e07f1b11c62e
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
<<<<<<< HEAD
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
=======

            })
    }
    // static listStudent(req, res){
    //     Student
    //         .findAll({
    //             order: [['id', 'ASC']]
    //         })
    //         .then((students) => {
    //             res.render('student', {students})
    //         })
    //         .catch((err) => {
                
    //         })  
    // }

    // static editStudent(req, res){
    //     Student
    //         .findOne()
    //         .then((student) => {
    //             // include: [Subject],
    //             res.render('studentEdit', {student})
    //         })
    //         .catch((err) => {

    //         })
    // }

    // static editStudentPos(req, res){
    //     Student
    //         .update({
    //             firstName: req.body.firstname,
    //             lastName: req.body.lastname,
    //             email: req.body.email,
    //             updatedAt: new Date
    //         }, {
    //             where:{
    //                 id: req.params.id
    //             }
    //         })
    //         .then(() => {
    //             res.redirect('/student')
    //         })
    //         .catch((err) => {

    //         })
    // }

    // static deleteStudent(req, res){
    //     Student
    //         .destroy({
    //             where:{
    //                 id: req.params.id
    //             }
    //         })
    //         .then(() => {
    //             res.redirect('/student')
    //         })
    //         .catch((err) => {

    //         })
    // }

    // static addSubject(req, res){
    //     Student
    //         .findOne({
    //             where:{
    //                 id: req.params.id
    //             }
    //         })
    //         .then((student) => {
    //             Subject
    //             .findAll()
    //             .then((subjects) => {
    //                 res.render('studentSubjectForm', {student, subjects})
    //             })
    //             .catch((err) => {
    //             })
    //         })
    //         .catch((err) => {

    //         })
    // }

    // static addSubjectPos(req, res){
    //     StudentSubject
    //         .create({
    //             StudentId: req.body.student_id,
    //             SubjectId: req.body.subject_id,
    //             updatedAt: new Date
    //         })
    //         .then(() => {
    //             res.redirect('/student')
    //         })
    //         .catch((err) => {

    //         })
    // }
>>>>>>> 82e6c5e65cda72b76c20094b3c71e07f1b11c62e
}
module.exports = CustomerController