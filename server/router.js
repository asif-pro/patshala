const loginController    = require ( './controllers/loginController' );
const studentController    = require ( './controllers/studentController' );

const express    = require ( 'express' );
const router     = express.Router ();


router.post ('/login', loginController.login);
router.post ('/insert_student', studentController.insertStudent);



module.exports = router;