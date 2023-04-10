import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Forgot.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ForgotPassword = () => {
  return (
    <>
      <Helmet title='ForgotPassword'/>
      <section>
          <div className='Container'>
              <h3 className='Container-heading'>Forgot password</h3>
              {/* <div className='auth_form forgot'>
                <div className='form_group'>
                  <input type='email' placeholder='Enter your email' />
                </div> 
                <button className='buy__btn auth__btn login__btn forgot__btn'>Send email verification</button> 
              </div> */}
            <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your email"
              name="email"
              autoComplete="email"
              color="secondary"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Send email verification
            </Button>
            </Box>
          </div>
      </section>
    </>

  )
}

export default ForgotPassword