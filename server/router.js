const loginController    = require ( './controllers/loginController' );
const studentController    = require ( './controllers/studentController' );
const teacherController = require('./controllers/teacherController');
// const TeacherController    = require ( './controllers/teacherController' );
const assignmentController = require ('./controllers/assignmentController');
const softSkillsController = require ('./controllers/softSkillsController');
const updateManyController = require ('./controllers/updateMany');

const express    = require ( 'express' );
const router     = express.Router ();


router.post ('/login', loginController.login);
router.post ('/insert_student', studentController.insertStudent);
router.get ('/get_all_students',studentController.getAllStudent);
router.post ('/insertTeacher',teacherController.insertTeacher);
router.get ('/getAllTeachers',teacherController.getAllTeachers);
router.get ('/getTeacher/:id',teacherController.getTeacher);
router.post ('/insert_assignment',assignmentController.insertAssignment);
router.get ('/get_assignments/:subject',assignmentController.getAssignmentBySubject);
router.get ('/student_assignment/:studentId',assignmentController.getAssignmentByStudent);
router.put ('/update_assignment',assignmentController.updateScore);
router.put ('/update_sofSkills',softSkillsController.updateSoftSkillsScore);
router.post ('/insert_softSkills', softSkillsController.insertSoftSkills);
router.get ('/updatemany', updateManyController.updateSoftSkills);
router.get ('/softSkills_by_subject/:subject', softSkillsController.getSoftSkillsBySubject);
router.get ('/getAverageSoftSkillScore/:subject/:skill_name', softSkillsController.averageSoftSkillScoreBySubject);
router.get ('/allStudentsAverageAssignmentScoreBySubjectByScoreRange/:subject', assignmentController.getAllStudentsAverageAssignmentScoreBySubjectByScoreRange);



module.exports = router;