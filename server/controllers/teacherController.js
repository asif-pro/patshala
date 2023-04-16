const teacherModel = require ('../model/teacher')
const loginModel = require ('../model/loginModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const teacherController = {};

teacherController.insertTeacher = async ( req, res ) => {

    try {
        const { TeacherId, TeacherName, password, gender, isHeadOf, ownSection, phone, email, userType } = req.body ;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    res.send (await teacherModel.create ({TeacherId, TeacherName, password: hashedPassword, gender, isHeadOf, ownSection, phone, email, userType }) );
    const userId = TeacherId;
    await loginModel.create ({userId, password: hashedPassword, userType});
    res.sendStatus (200) ;
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }

}
teacherController.getAllTeachers = async ( req, res ) => {
    try {

        
        const allTeachers  = await teacherModel.find ( {} );
        res.status(200).send( JSON.stringify(allTeachers) );

    } catch ( err ) {
        console.log(error)
        res.sensStatus( 500);
    }
}
teacherController.getTeacher = async ( req, res ) => {
    try {
        const teacherId = req.params.id;
        const teacherDetails = await teacherModel.findById(teacherId);
        res.status(200).send (JSON.stringify(teacherDetails));
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = teacherController;