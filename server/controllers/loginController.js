const loginModel = require ( '../model/loginModel' );
const bcrypt = require ('bcrypt');

const loginController = {};

loginController.dashboard = async ( req, res ) => {

    try {

        const { userId, password } = req.body ;

        // inserting Data
        // res.send (await loginModel.create ({userId, password, userType}) );

        const loginData = await loginModel.findOne({ userId: userId });

        if (loginData){
            const validate = await bcrypt.compare(password, loginData.password);

            if (validate)  {
                console.log('password matched');
                res.status = 200;
            }
            else console.log('wrong password');
        }
        else {
            console.log('Invalid User');
        }
        
        

    }

    catch (err) {
        res.status = 500 ;
        res.send (err);
    }
}

module.exports = loginController;