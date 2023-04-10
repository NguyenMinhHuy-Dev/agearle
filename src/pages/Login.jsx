import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Login.css'
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <>
      <Helmet title='Login'/>
      <section>
          <div className='Container'>
              <h3 className='Container-heading'>Login</h3>
              {/* <div className='auth_form'>
                <div className='form_group'>
                  <input type='email' placeholder='Enter your email' />
                </div>
                <div className='form_group'>
                  <input type='password' placeholder='Enter your password' />
                </div> 
                <span>Forgot password? <Link to='/forgot'>Click here</Link></span> 
                <button className='buy__btn auth__btn login__btn'>Login</button>
                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
              </div> */}
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              color="secondary"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Container>
    </ThemeProvider>

          </div>
      </section>
    </>

  )
}

export default Login