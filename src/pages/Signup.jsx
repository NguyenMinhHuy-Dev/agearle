import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../config/firebase';
import { storage } from '../config/firebase';
import { db } from '../config/firebase';

import { toast } from 'react-toastify';

const Signup = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            window.confirm("Passwords are not the same!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user; 

                    setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: name,
                        email,
                        photoURL: "https://agearle.vercel.app/static/media/profile.5faf09a7795d28bf5a2b.png",
                        phoneNumber,
                        address,
                        password
                    });

                    updateProfile(user, {
                        displayName: name,
                        photoURL: "https://agearle.vercel.app/static/media/profile.5faf09a7795d28bf5a2b.png",
                    });  
                    

                    const storageRef = ref(storage, `images/${Date.now() + file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);

                    uploadTask.on(
                        "state_changed", 
                        (err) => {
                            // toast.error("Upload file error!");
                        },
                        (snapshot) => {
                            // console.log("snapshot");
                        },
                        () => { 
                            getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {
                                console.log(url);

                                await updateProfile(user, { 
                                    photoURL: url,
                                });  

                                await setDoc(doc(db, 'users', user.uid), {
                                    uid: user.uid,
                                    displayName: name,
                                    email,
                                    photoURL: url,
                                    phoneNumber,
                                    address,
                                    password,
                                    type: 0
                                });

                                toast.success("Account created"); 
                                navigate('/login')
                            });
                        }
                    ); 

                    // uploadTask.on(
                    //     (error) => {
                    //         toast.error(error.message);
                    //     },
                    //     () => {
                    //         getDownloadURL(uploadTask.snapshot.ref)
                    //         .then(async (downloadURL) => {
                    //             // await updateProfile(user, {
                    //             //     displayName: name,
                    //             //     photoURL: downloadURL,
                    //             // });

                                // await setDoc(doc(db, 'users', user.uid), {
                                //     uid: user.uid,
                                //     displayName: name,
                                //     email,
                                //     photoURL: "downloadURL",
                                //     phoneNumber,
                                //     address,
                                //     password
                                // });
                    //         })
                    //     }
                    // )  
                })
                .catch (error => {
                    toast.error(error.message);
                });

            

        //     uploadTask.on(
        //         (error) => {
        //             toast.error(error.message);
        //         },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref)
        //                 .then(async (downloadURL) => {
                            
        //                     await updateProfile(user, {
        //                         displayName: name,
        //                         photoURL: downloadURL,
        //                     });

        //                     await setDoc(doc(db, 'users', user.uid), {
        //                         uid: user.uid,
        //                         displayName: name,
        //                         email,
        //                         photoURL: downloadURL,
        //                         phoneNumber,
        //                         address,
        //                         password
        //                     });
        //                 })
        //         })
        //     toast.success("Account created");
        //     navigate('/login')
        } catch (error) {

        }
    }

    return (
        <>
        <Helmet title='Signup'/>
        <section>
            <div className='Container'>
                    <h3 className='Container-heading'>Sign up</h3> 
                    <div className='auth_form'> 
                        <form onSubmit={handleSignUp}>
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
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
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
                                        value={phoneNumber}
                                        onChange={(e) => {
                                            setPhoneNumber(e.target.value)
                                        }}
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
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
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
                                        value={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value)
                                        }}
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
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
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
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={4} justifyItems={"center"}>
                                    <label htmlFor="upload-photo">
                                        <input
                                        style={{ display: "none" }}
                                        id="upload-photo"
                                        name="upload-photo"
                                        type="file"
                                        onChange={(e) => {setFile(e.target.files[0])}}
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