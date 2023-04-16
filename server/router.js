const loginController    = require ( './controllers/loginController' );
const studentController    = require ( './controllers/studentController' );
const teacherController = require('./controllers/teacherController');
// const TeacherController    = require ( './controllers/teacherController' );
const assignmentController = require ('./controllers/assignmentController');

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



module.exports = router;