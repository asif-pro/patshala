const loginController    = require ( './controllers/loginController' );
const studentController    = require ( './controllers/studentController' );

const express    = require ( 'express' );
const router     = express.Router ();


router.post ('/dashboard', loginController.dashboard);
router.post ('/insert_student', studentController.insertStudent);



module.exports = router;