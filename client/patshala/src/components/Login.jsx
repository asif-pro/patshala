import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {

  let navigate = useNavigate ();

    const login = () => {
        console.log('logged-in');
        navigate('/dashboard');
    };


  return (
    <div className='loginForm'>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      
      <TextField label={'User-ID'} id="userid" />
     
      <TextField label={'Password'} id="password" margin="dense" />
      
    </Box>

    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={login}>Log-in</Button>
    </Stack>
    </div>
  )
}

export default Login