import React, { useState } from 'react'
import { 
  Container,
  FormGroup,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button
} from '@mui/material'
import {toast} from 'react-toastify' 

import { auth, db,storage } from '../config/firebase'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {collection, addDoc, setDoc, doc} from 'firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

function AddUser() {

  const [enterName, setEnterName] = useState('') 
  const [enterEmail, setEnterEmail] = useState('')
  const [enterAddress, setEnterAddress] = useState('')
  const [enterType, setEnterType] = useState('')  
  const [enterPhone, setEnterPhone] = useState('')
  const [enterPassword, setEnterPassword] = useState('')
  const [enterConfirmPassword, setEnterConfirmPassword] = useState('')
  const [enterUserImg, setEnterUserImg] = useState(null)
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const addUser = async e => {
    e.preventDefault()
    setLoading(true)

    if (enterPassword !== enterConfirmPassword) {
        window.confirm("Passwords are not the same!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, enterEmail, enterPassword)
        .then((userCredential) => {
            const user = userCredential.user; 

            setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                displayName: enterName,
                email: enterEmail, 
                photoURL: "https://agearle.vercel.app/static/media/profile.5faf09a7795d28bf5a2b.png",
                phoneNumber: enterPhone,
                address: enterAddress,
                password: enterPassword
            });

            updateProfile(user, {
                displayName: enterName,
                photoURL: "https://agearle.vercel.app/static/media/profile.5faf09a7795d28bf5a2b.png",
            });  
            

            const storageRef = ref(storage, `images/${Date.now() + enterUserImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, enterUserImg);

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
                            displayName: enterName,
                            email: enterEmail, 
                            photoURL: url,
                            phoneNumber: enterPhone,
                            address: enterAddress,
                            password: enterPassword,
                            type: enterType 
                        });

                        toast.success("User created"); 
                        navigate('/login')
                    });
                }
            ); 
        })
        .catch (error => {
            toast.error(error.message);
        }); 
    } catch (error) {

    }
 
  }

  return (
    <section className='admin_section'>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {
              loading ? <h1 className='py-5'>Loading.........</h1> : <>
              <NavLink to='/dashboard/users' style={{textDecorationLine: 'none', color: "black"}}> 
                Comeback
              </NavLink>
              <h1 className='title'>Add User</h1>
              <form onSubmit={addUser}>
                <FormGroup>
                    <TextField
                    label="Full Name"
                    variant="outlined"
                    placeholder="Enter user fullname"
                    fullWidth
                    margin="normal"
                    value={enterName}
                    onChange={e=> setEnterName(e.target.value)}
                    required
                    />
                </FormGroup>

                <FormGroup>
                    <TextField
                    type="file" 
                    onChange={e => setEnterUserImg(e.target.files[0])}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    />
                </FormGroup> 

                <FormGroup>
                    <TextField
                    label="Email"
                    variant="outlined"
                    placeholder="Enter email"
                    fullWidth
                    margin="normal"
                    value={enterEmail}
                    onChange={e=> setEnterEmail(e.target.value)}
                    required
                    />
                </FormGroup>  
                
                <FormGroup>
                    <TextField
                    label="Address"
                    variant="outlined"
                    placeholder="Enter address"
                    fullWidth
                    margin="normal"
                    value={enterAddress}
                    onChange={e=> setEnterAddress(e.target.value)}
                    required
                    />
                </FormGroup>  

                <FormGroup>
                    <FormControl fullWidth margin="normal">
                    <Select 
                        variant="outlined"
                        defaultValue=""
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        value={enterType}
                        onChange={e=> setEnterType(e.target.value)}
                    >
                        <MenuItem value="" disabled>
                            Type
                        </MenuItem>
                        <MenuItem value="1">Admin</MenuItem>
                        <MenuItem value="0">Customer</MenuItem> 
                    </Select>
                    </FormControl>
                </FormGroup> 

                <FormGroup>
                    <TextField 
                        label="Phone"
                        type="number"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={enterPhone}
                        onChange={e=> setEnterPhone(e.target.value)}
                        required 
                    />
                </FormGroup> 
                
                <FormGroup>
                    <TextField
                    label="Password"
                    variant="outlined"
                    placeholder="Enter password"
                    fullWidth
                    type='password'
                    margin="normal"
                    value={enterPassword}
                    onChange={e=> setEnterPassword(e.target.value)}
                    required
                    />
                </FormGroup>  
                
                <FormGroup>
                    <TextField
                    label="Confirm Password"
                    variant="outlined"
                    placeholder="Enter confirm password"
                    fullWidth
                    type='password'
                    margin="normal"
                    value={enterConfirmPassword}
                    onChange={e=> setEnterConfirmPassword(e.target.value)}
                    required
                    />
                </FormGroup>  
                
                <Button variant="contained" color="primary" type="submit" className='addProductButton'>
                    Add Product
                </Button>
                </form>
              </>
            }
            
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AddUser;