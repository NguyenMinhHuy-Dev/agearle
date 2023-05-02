import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Grid, TextField, Box, Button, TextareaAutosize} from '@mui/material';
import { Table,TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import '../styles/Check-out.css';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import { IconButton} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import {cartActions} from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';


const Checkout = () => {

    const totalQty = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    // const totalPrice = useSelector((state) => state.cart.totalAmount);
    const cartItems = useSelector((state) => state.cart.cartItems); 

    const [name, setName] = useState(sessionStorage.getItem('name'));
    const [phone, setPhone] = useState(sessionStorage.getItem('phoneNumber'));
    const [email, setEmail] = useState(sessionStorage.getItem('email'));
    const [address, setAddresss] = useState(sessionStorage.getItem('address'));
    const [note, setNote] = useState('');

    const navigate = useNavigate();

    const handleCheckout = async e => {
        e.preventDefault()  
        if (cartItems.length > 0) {
            try { 
                const docRef = collection(db,'orders');
                await addDoc(docRef, {
                    customerName: name,
                    customerPhone: phone,
                    address,
                    note,
                    date: new Date(),
                    status: 'Delivering',
                    items: cartItems,
                    total: totalAmount
                }) 
                toast.success("Order successful!")
                window.location.reload();
            }
            catch (err) {
                toast.error(err);
            }
        }
        else {
            toast.error("Your cart is empty!");
        }
    }
  

    return (
    <>
        <Helmet title='Checkout'></Helmet>
        <CommonSection title='Checkout'></CommonSection>
        <section>
            <Container>
                <Grid container alignItems={'center'}>
                    
                    <Table className="table bordered">
                        <TableHead>
                            <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell style={{textAlign: "center"}}>Price</TableCell>
                            <TableCell style={{textAlign: "center"}}>Qty</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                            cartItems.map((item,index)=>(
                                <Tr item={item} key={index}/>
                            ))
                            }
                            
                        </TableBody>
                    </Table>

                    <Grid item lg={6} md={6} xs={12} paddingBottom={5}>
                        <h1 style={{marginBottom: "20px", fontWeight: "bold"}}>Billing Information</h1> 
                        <Box noValidate 
                        sx={{
                            marginTop: '40px',
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
                                    label="Name*"
                                    type= "text"
                                    color="secondary" 
                                    variant="outlined"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    autoFocus 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="PhoneNumber"
                                    label="Phone Number*"
                                    name="PhoneNumber"
                                    type= "number"
                                    color="secondary" 
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email*"
                                    name="email"
                                    type="email"
                                    color="secondary" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address*"
                                    name="Address"
                                    type="text"
                                    color="secondary"
                                    value={address}
                                    onChange={e => setAddresss(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Note"
                                        multiline
                                        rows={4}
                                        value={note}
                                        onChange={e => setNote(e.target.value)}
                                        // defaultValue="Default Value"
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="confirm"
                                    label="Confirm password"
                                    type="password"
                                    id="confirmPassword"
                                    color="secondary"
                                    />
                                </Grid> */}
                            </Grid>

                            {/* <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Sign Up
                            </Button> */}
                            {/* <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                            </Grid> */}
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <div className="checkout__cart">
                            <h6>Total Qty: <span>{totalQty} items</span></h6>
                            <h6>Subtotal: <span>{totalAmount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span></h6>
                            <h6>
                                <span>
                                    Shipping: <br/>
                                    free shipping
                                </span>
                                <span>0</span>
                            </h6>

                            <h4>Total Cost: <span>{totalAmount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span></h4>
                            <button onClick={handleCheckout} className="but__btn auth__btn w-100">
                                Place an order
                            </button>
                        </div>   
                    </Grid>
                </Grid>
            </Container>
        </section>
    </>
    )
};

const Tr = ({item})=>{

    const dispatch = useDispatch()
  
    
    return (
      <>
          <TableRow >
            <Link to={`/shop/${item.id}`}>
              <TableCell><img src={item.imgUrl} alt="" /></TableCell>
            </Link>
            <TableCell>{item.productName}</TableCell>
            <TableCell style={{textAlign: "center"}}>
              {item.totalPrice.toLocaleString()}</TableCell>
  
            <TableCell style={{textAlign: "center"}}>
                <TextField 
                id="standard-basic" 
                variant="standard" 
                value = {item.quantity}
                className={'format__quantity'}/> 
                
            </TableCell> 
          </TableRow>
      </>
    )
  }

export default Checkout;