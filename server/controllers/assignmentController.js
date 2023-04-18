const assignmentModel = require ('../model/assignment');
const { findOneAndDelete, findOneAndUpdate } = require('../model/teacher');

const assignmentController = {};

assignmentController.insertAssignment = async ( req, res ) => {

    try {
        const { assignment_number, subject, section, teacher_id, studentId, score } = req.body ;

        await assignmentModel.create ({assignment_number, subject, section, teacher_id, studentId, score});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
assignmentController.getAssignmentBySubject = async ( req, res ) => {
    try {
        const req_subject = req.params.subject;
        const assignments = await assignmentModel.find ({subject: req_subject});
        let assignmentsByStudents = {};
        let assignmentResults = [];
        assignments.forEach((assignment)=>{
            if (assignmentsByStudents[assignment.studentId]) {
                assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {[`assignment${assignment.assignment_number}`]:assignment.score})
            }
            else{
                assignmentsByStudents [assignment.studentId] =  {[`assignment${assignment.assignment_number}`]:assignment.score}
            }
            // assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {_id:assignment._id})
            assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {id:assignment.studentId})
            assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {section:assignment.section})


        })
        for (const [key, value] of Object.entries(assignmentsByStudents)) {
            assignmentResults.push(value);
          }

        res.status(200).send (JSON.stringify(assignmentResults));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
assignmentController.getAssignmentByStudent = async ( req, res ) => {
    try {
        const studentId = req.params.studentId;
        const assignments = await assignmentModel.find ({studentId: studentId});
        let assignmentsBySubject = {};
        let assignmentResults = [];
        let id = 0;
        assignments.forEach((assignment)=>{
            
            if (assignmentsBySubject[assignment.subject]) {
                assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {[`assignment${assignment.assignment_number}`]:assignment.score})
            }
            else{
                assignmentsBySubject [assignment.subject] =  {[`assignment${assignment.assignment_number}`]:assignment.score}
            }
            // assignmentsByStudents[assignment.studentId] = Object.assign(assignmentsByStudents[assignment.studentId], {_id:assignment._id})
            // assignmentsBySubject[assignment.studentId] = Object.assign(assignmentsBySubject[assignment.studentId], {id:assignment.studentId})
            assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {id: id++})
            assignmentsBySubject[assignment.subject] = Object.assign(assignmentsBySubject[assignment.subject], {subject:assignment.subject})
            // assignmentsBySubject[assignment.studentId] = Object.assign(assignmentsBySubject[assignment.studentId], {section:assignment.section})
            

        })
        for (const [key, value] of Object.entries(assignmentsBySubject)) {
            assignmentResults.push(value);
          }

        res.status(200).send (JSON.stringify(assignmentResults));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
assignmentController.updateScore = async ( req, res ) => {
    try {
        const { assignment_number, subject, studentId, score } = req.body;
        const updatedAssignment = await assignmentModel.findOneAndUpdate({studentId: studentId, assignment_number:assignment_number, subject: subject}, {score:score}, {new: true});
        console.log('from controller', updatedAssignment);
        res.status(200).send (JSON.stringify(updatedAssignment));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = assignmentController;