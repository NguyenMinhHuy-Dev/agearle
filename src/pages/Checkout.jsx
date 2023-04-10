import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Grid, TextField, Box, Button} from '@mui/material';
import '../styles/Check-out.css';
import { useSelector } from 'react-redux';


const Checkout = () => {

    const totalQty = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    return (
    <>
        <Helmet title='Checkout'></Helmet>
        <CommonSection title='Checkout'></CommonSection>
        <section>
            <Container>
                <Grid container alignItems={'center'}>
                    <Grid item lg={6} md={6} xs={12} paddingBottom={5}>
                        <h1 style={{marginBottom: "20px", fontWeight: "bold"}}>Billing Information</h1>
                        {/* <FormControl sx={{
                            width: '25ch', 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                            }}>  

                                <TextField 
                                id="outlined-basic"
                                label="Outlined secondary" 
                                color="secondary" 
                                type="text"
                                focused />  

                            <FormGroup>
                            <TextField 
                            label="Outlined secondary" 
                            color="secondary" 
                            type='email' 
                            placeholder='Enter your email'focused />  
                                <input type='email' placeholder='Enter your email'></input>
                            </FormGroup>

                            <FormGroup>
                                <input type='number' placeholder='Phone number'></input>
                            </FormGroup>

                            <FormGroup>
                                <input type='text' placeholder='Street address'></input>
                            </FormGroup>

                            <FormGroup>
                                <input type='text' placeholder='City'></input>
                            </FormGroup>

                            <FormGroup>
                                <input type='text' placeholder='Potal Code'></input>
                            </FormGroup>

                            <FormGroup>
                                <input type='text' placeholder='Country'></input>
                            </FormGroup>
                        </FormControl> */}
                        
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
                            <button className="but__btn auth__btn w-100">
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

export default Checkout;