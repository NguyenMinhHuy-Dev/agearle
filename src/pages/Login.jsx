import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import useAuth from '../custom-hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';

const theme = createTheme();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("isLogged")) {
      navigate('/user'); 
    } 
  })


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user; 

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        sessionStorage.setItem("isLogged", true);
        sessionStorage.setItem("phoneNumber", docSnap.data().phoneNumber);
        sessionStorage.setItem("address", docSnap.data().address); 
        sessionStorage.setItem("typeUser", docSnap.data().type);
      } 
      else {
        toast.error("Something went wrong! Try again later");
      }

      toast.success("Login successful!");
      
      navigate('/user'); 
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Helmet title='Login'/>
      <section>
          <div className='Container'>
              <h3 className='Container-heading'>Login</h3> 
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
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
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
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
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