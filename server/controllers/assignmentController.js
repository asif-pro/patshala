const assignmentModel = require ('../model/assignment');

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
        res.status(200).send (JSON.stringify(assignments));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


module.exports = assignmentController;