import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { checkLogin } from '../loginServices';
import Cookies from 'js-cookie';
import {CookiesContext} from './NavbarWrapper';
import loginImage from './images/sms.png'

// const {setCookie} = CookiesContext();



const Login = () => {
  const { setCookie } = React.useContext(CookiesContext);
  let navigate = useNavigate ();

    const login = async (e) => { 
      // console.log(e);
      e.preventDefault()
      // console.log('logged-in');
      // console.log(e.target.userid.value);
      // console.log(e.target.password.value);
      const userid = e.target.userid.value;
      const password = e.target.password.value;
      const loginResult = await checkLogin(userid,password);
      const authToken = loginResult.responseBody.accessToken;
      Cookies.set('accessToken', authToken);
      setCookie(authToken);
      // console.log(loginResult);

      if (loginResult.status === 200){

        if(loginResult.responseBody.userType === 3) {
          localStorage.setItem('user_id',userid);
          localStorage.setItem('user_type',loginResult.responseBody.userType);
          // const storage = localStorage.getItem('user_id');
          // console.log(storage);
          navigate('/student_dashboard')
        }
        if(loginResult.responseBody.userType === 2) {
          localStorage.setItem('user_id',userid);
          localStorage.setItem('user_type',loginResult.responseBody.userType);
          // const storage = localStorage.getItem('user_id');
          // console.log(storage);
          navigate('/teacher_dashboard')
        }
      }
    };


  return (
    <div className='logincontainer'>
      <div className='loginImage'><img src={loginImage}></img></div>
      <div className='loginForm'>
      
      <h2>PATSHALA</h2>
    
    
    <Box component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
      onSubmit={login}
    >
      
      <TextField label={'User-ID'} id="userid" name='userid' />
      
     
      <TextField label={'Password'} id="password" margin="dense" type='password' name='password' />

      <Stack direction="row">
      <Button variant="contained" type='submit'>Log-in</Button>
    </Stack>
      
    </Box>

    
    </div>
    
    
    </div>
    
  )
}

export default Login

{/* <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style="background-image: url('images/bg_1.jpg');"></div>
    <div class="contents order-2 order-md-1">

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>Login to <strong>Colorlib</strong></h3>
            <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form action="#" method="post">
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" class="form-control" placeholder="your-email@gmail.com" id="username"/>
              </div>
              <div class="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Your Password" id="password"/>
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div class="control__indicator"></div>
                </label>
                <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="Log In" class="btn btn-block btn-primary"/>

            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div> */}