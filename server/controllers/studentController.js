const studentModel = require ( '../model/student' );
const loginModel = require ('../model/loginModel');
const assignmentModel = require ('../model/assignment');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const studentController = {};

studentController.insertStudent = async ( req, res ) => {

    try {
        const { studentId, studentName, password, gender, dob, clas_s, section, phone, email, userType } = req.body ;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // const userId = studentId;
        await loginModel.create ({userId: studentId, password: hashedPassword, userType});

        for (let i = 1; i < 7; i++) {
            await assignmentModel.create ({assignment_number: i, subject:'Math', section, teacher_id: '', studentId, score:-1})
        }
        for (let i = 1; i < 7; i++) {
        await assignmentModel.create ({assignment_number: i, subject:'Science', section, teacher_id: '', studentId, score:-1})
        }
        for (let i = 1; i < 7; i++) {
        await assignmentModel.create ({assignment_number: i, subject:'History', section, teacher_id: '', studentId, score:-1})
        }
        for (let i = 1; i < 7; i++) {
        await assignmentModel.create ({assignment_number: i, subject:'Language', section, teacher_id: '', studentId, score:-1})
        }
        for (let i = 1; i < 7; i++) {
        await assignmentModel.create ({assignment_number: i, subject:'Art', section, teacher_id: '', studentId, score:-1})
        }
        for (let i = 1; i < 7; i++) {
        await assignmentModel.create ({assignment_number: i, subject:'Music', section, teacher_id: '', studentId, score:-1})
        }



        res.status(201).send (JSON.stringify(await studentModel.create ({studentId, studentName, password: hashedPassword, gender, dob, clas_s, section, phone, email, userType })));

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
studentController.getAllStudent = async ( req, res ) => {
    try {

        
        const allStudents  = await studentModel.find ( {} );
        // res.status( 200).send( JSON.stringify(allStudents));
        res.status( 200).send(allStudents);

    } catch (err) {

        res.status (500);
        res.send ( err );
    }
}

module.exports = studentController;