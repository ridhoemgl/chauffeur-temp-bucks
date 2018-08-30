const app = require('express').Router()
const subjectController = require('../controller/subjectController')

app.get('/', subjectController.listSubject)
app.get('/:id/enrolled-student', subjectController.listEnrolledStudent)
app.get('/:id/add-score', subjectController.showScore)
app.post('/:id/add-score', subjectController.addScore)

module.exports = app