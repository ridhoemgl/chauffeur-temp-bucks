const {Subject} = require('../models')
const {Student} = require('../models')
const {StudentSubject} = require('../models')

class SubjectController{
    static listSubject(req, res){
        Subject
            .findAll()
            .then((subjects) => {
                res.render('subject', {subjects})
            })
            .catch((err) => {

            })
    }

    static listEnrolledStudent(req, res){
        Subject
            .findById(req.params.id, {
                include:{
                    model: Student
                }
            })
            .then((data) => {
                // res.send(data.Students)
                res.render('subjectEnrolledStudent', {data})
            })
            .catch((err) => {

            })
    }

    static showScore(req, res){
        let id = req.params.id
        res.render('subjectAddScore', {id})
    }

    static addScore(req, res){
        // res.send()

    }


}
module.exports = SubjectController