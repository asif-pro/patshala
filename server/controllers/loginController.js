const loginModel = require ( '../model/loginModel' );
const bcrypt = require ('bcrypt');
const {createSession, getSession, destroySession} = require('../session');

const loginController = {};
const saltRounds = 10;

loginController.login = async ( req, res ) => {

    try {

        const { userId, password } = req.body ;

        console.log ('id', userId);
        console.log ('pass', password);

        // inserting Data
        // res.send (await loginModel.create ({userId, password, userType}) );

        const loginData = await loginModel.findOne({ userId: userId });

        if (loginData){
            const validate = await bcrypt.compare(password, loginData.password);

            if (validate)  {
                console.log('password matched');
                const token = createSession(userId);

                res.cookie('accessToken', token, {
                httpOnly: false,
                secure: false,
                sameSite: 'Strict'
                });
                // res.sendStatus(200);
                const {userType} = loginData;
                res.status(200).send(JSON.stringify({userType, accessToken: token}));
            }
            else {
                console.log('wrong password');
                return res.status (400). json({ msg: "wrong password" });
            }
        }
        else {
            console.log('Invalid User');
            return res.status (401). json({ msg: "Invalid User" });
        }
        
        

    }

    catch (err) {
        res.status = 500 ;
        // res.send (err);
    }
}

module.exports = loginController;