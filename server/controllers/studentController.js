const studentModel = require ( '../model/student' );
const loginModel = require ('../model/loginModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const studentController = {};

studentController.insertStudent = async ( req, res ) => {

    const { studentId, studentName, password, gender, dob, clas_s, section, phone, email, userType } = req.body ;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    res.send (await studentModel.create ({studentId, studentName, password: hashedPassword, gender, dob, clas_s, section, phone, email, userType }) );
    const userId = studentId;
    await loginModel.create ({userId, password: hashedPassword, userType});
    res.status = 200 ;

}
studentController.getAllStudent = async ( req, res ) => {
    try {

        res.status         = 200;
        const allStudents  = await studentModel.find ( {} );
        res.send ( allStudents );

    } catch ( err ) {

        res.status = 500;
        res.send ( err );
    }
}

module.exports = studentController;