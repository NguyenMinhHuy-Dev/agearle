import React, { useEffect, useState } from 'react'
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
import {collection, addDoc, getDoc, doc, updateDoc} from 'firebase/firestore'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

function EditUser() {

    const [enterName, setEnterName] = useState('') 
    const [enterEmail, setEnterEmail] = useState('')
    const [enterAddress, setEnterAddress] = useState('')
    const [enterType, setEnterType] = useState('')  
    const [enterPhone, setEnterPhone] = useState('')
    const [enterPassword, setEnterPassword] = useState('')
    const [enterConfirmPassword, setEnterConfirmPassword] = useState('')
    const [enterUserImg, setEnterUserImg] = useState(null)
    const [loading,setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const editUser = async e => {
    e.preventDefault()

    const docRef = doc(db, "users", id);

    if (enterPassword !== '' || enterConfirmPassword !== '') {
        if (enterConfirmPassword !== enterPassword) {
            toast.error("Passwords are not the same!");
            return;
        }
        setLoading(true)

        // const userCredential = await signInWithEmailAndPassword(auth, enterEmail, enterPassword);

        // const user = userCredential.user; 

        // updateProfile(user, { 
        //     password: enterPassword
        // });  

        if (enterUserImg) {
            const storageRef = ref(storage, `prodcutImages/${Date.now() + enterUserImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef,enterUserImg)
            uploadTask.on(() =>{
                toast.error('images not uploaded')
              }, ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
                  await updateDoc(docRef, { 
                    displayName: enterName,
                    email: enterEmail, 
                    photoURL: downloadURL,
                    phoneNumber: enterPhone,
                    address: enterAddress,
                    password: enterPassword,
                    type: enterType 
                  })
                })
              })
              
              setLoading(false)
              toast.success("Edit user successful!")
              navigate('/dashboard/users'); 
        }
        else {
            await updateDoc(docRef, {
                displayName: enterName,
                email: enterEmail,  
                phoneNumber: enterPhone,
                address: enterAddress,
                password: enterPassword,
                type: enterType 
              })
              
              setLoading(false)
              toast.success("Product Successfully added!!")
              navigate('/dashboard/all-products'); 
        }
        return;
    } 
    
    setLoading(true)

    if (enterUserImg) {
        const storageRef = ref(storage, `images/${Date.now() + enterUserImg.name}`)
        const uploadTask = uploadBytesResumable(storageRef,enterUserImg)
        uploadTask.on(() =>{
            toast.error('images not uploaded')
          }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
              await updateDoc(docRef, { 
                displayName: enterName,
                email: enterEmail, 
                photoURL: downloadURL,
                phoneNumber: enterPhone,
                address: enterAddress, 
                type: enterType 
              })
            })
          })
          
          setLoading(false)
          toast.success("Edit user successful!")
          navigate('/dashboard/users'); 
    }
    else {
        await updateDoc(docRef, {
            displayName: enterName,
            email: enterEmail,  
            phoneNumber: enterPhone,
            address: enterAddress, 
            type: enterType 
          })
          
          setLoading(false)
          toast.success("Edit user successful!")
          navigate('/dashboard/users'); 
    }
 
  }

  const getUser = async() => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        setEnterName(docSnap.data().displayName);
        setEnterEmail(docSnap.data().email);
        setEnterAddress(docSnap.data().address);
        setEnterPhone(docSnap.data().phoneNumber);
        setEnterType(docSnap.data().type); 
        setEnterPassword(docSnap.data().password)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

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
              <h1 className='title'>Edit User</h1>
              <form onSubmit={editUser}>
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
                    />
                </FormGroup>  
                
                <Button variant="contained" color="primary" type="submit" className='addProductButton'>
                    Save Changes
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

export default EditUser;