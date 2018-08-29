const {Customer} = require('../models')
// const {Subject} = require('../models')
// const {StudentSubject} = require('../models')

class CustomerController{

    static login(req, res){
        Customer
            .findOne({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then((data) => {
                if(data){
                    res.send(data)
                }else {
                    res.render('index')
                }
            })
            .catch((err) => {

            })
    }

    static formRegister(req, res){
        res.render('register.ejs')
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
}
module.exports = CustomerController