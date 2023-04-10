import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Login.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Signup = () => {
  return (
    <>
      <Helmet title='Signup'/>
      <section>
          <div className='Container'>
                <h3 className='Container-heading'>Sign up</h3> 
                <div className='auth_form'> 
                    <form>
                        {/* <div className='form_group'>
                            <input type='email' required placeholder='Enter your email' />
                        </div>
                        <div className='form_group'>
                            <input type='text' required placeholder='Enter your name' />
                        </div>
                        <div className='form_group'>
                            <input type='text' required placeholder='Enter your address' />
                        </div>
                        <div className='form_group'>
                            <input type='text' pattern="[0-9]{10}" required placeholder='Enter your phone number' />
                        </div>
                        <div className='form_group'>
                            <input type='password' placeholder='Enter your password' required/>
                        </div>
                        <div className='form_group'>
                            <input type='password' placeholder='Confirm your password' required/>
                        </div>
                        <button className='buy__btn auth__btn login__btn' type='submit'>Signup</button>
                        <p>Already have an account? <Link to='/login'>Login now</Link></p>  */}
                        <Box noValidate 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    name="Name"
                                    required
                                    fullWidth
                                    id="outlined-basic"
                                    label="Name"
                                    type= "text"
                                    color="secondary" 
                                    variant="outlined"
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="PhoneNumber"
                                    label="Phone Number"
                                    name="PhoneNumber"
                                    type= "number"
                                    color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    name="Address"
                                    type="text"
                                    color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="confirm"
                                    label="Confirm password"
                                    type="password"
                                    id="confirmPassword"
                                    color="secondary"
                                    />
                                </Grid>
                                <Grid item xs={4} justifyItems={"center"}>
                                <label htmlFor="upload-photo">
                                    <input
                                    style={{ display: "none" }}
                                    id="upload-photo"
                                    name="upload-photo"
                                    type="file"
                                    />
                                    <Button color="secondary" variant="contained" component="span" style={{color: "white"}}>
                                    Upload File
                                    </Button>
                                </label>
                                </Grid>
                            </Grid>

                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign Up
                            </Button>

                            <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/login' variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                            </Grid>
                        </Box>
                    </form>
                </div> 
            </div>  
      </section>
    </>

  )
}

export default Signup