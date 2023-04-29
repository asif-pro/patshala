const studentModel = require ( '../model/student' );
const loginModel = require ('../model/loginModel');
const assignmentModel = require ('../model/assignment');
const softSkillsModel = require ('../model/softSkills');
const mailController = require ('../mailController');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const studentController = {};

studentController.insertStudent = async ( req, res ) => {

    try {
        const { studentId, studentName, password, gender, dob, clas_s, section, phone, email, userType } = req.body ;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // const userId = studentId;
        await loginModel.create ({userId: studentId, password: hashedPassword, userType});
        
        // adding Assignments
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

        // adding SoftSkills
        
            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'Math', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'Math', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'Math', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'Math', section, studentId, score:-1})

            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'History', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'History', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'History', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'History', section, studentId, score:-1})

            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'Science', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'Science', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'Science', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'Science', section, studentId, score:-1})

            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'Music', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'Music', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'Music', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'Music', section, studentId, score:-1})

            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'Art', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'Art', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'Art', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'Art', section, studentId, score:-1})

            await softSkillsModel.create ({skill_name: 'TeamWork', subject:'Language', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Curiosity', subject:'Language', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Leadership', subject:'Language', section, studentId, score:-1})
            await softSkillsModel.create ({skill_name: 'Craetivity', subject:'Language', section, studentId, score:-1})
        


            mailController({reciver:email, subject:'Patshala Student Credentials', text: `User-ID: ${studentId}, Password: ${password}`})

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