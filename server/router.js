const loginController    = require ( './controllers/loginController' );
const studentController    = require ( './controllers/studentController' );

const express    = require ( 'express' );
const router     = express.Router ();


router.post ('/login', loginController.login);
router.post ('/insert_student', studentController.insertStudent);
router.get ('/get_all_students',studentController.getAllStudent)



module.exports = router;