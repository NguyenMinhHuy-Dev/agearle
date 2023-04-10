import { Container } from '@mui/system'
import React from 'react'
import '../styles/privacy.css'
import { Grid, Box} from '@mui/material'
import Button from '@mui/material-next/Button';

import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import privacy_5 from '../assets/img/privacy_5.png'
import privacy_4 from '../assets/img/privacy_4.png'
import privacy_6 from '../assets/img/privacy_6.webp'
import privacy_7 from '../assets/img/privacy_7.png'
import privacy_8 from '../assets/img/privacy_8.png'

const Privacy = () => {
  return (
   <>
   <section className='wrapper__privacy'>
    <Container>
      <Grid container>
        <Grid item lg={6} xs={12}>
            <h1>PRIVACY POLICY</h1>
            <div class="content">
              <h2>Agearle</h2>
              <h2>Agearle</h2>
            </div>
              <Grid container 
              rowSpacing={3} 
              >
                <Grid item lg={4} md={2} xs={12}>
                  <a href="#1">
                  <Button 
                    startIcon={<GppGoodOutlinedIcon />} 
                    variant="filled" 
                    style={{background: "#fde2e4", color: "#1d3557"}}>
                      Warranty
                  </Button>
                  </a>
                </Grid>

                <Grid item lg={4} md={2} xs={12}>
                <a href="#2">
                    <Button 
                      startIcon={<PaymentOutlinedIcon/>} 
                      variant="filled" 
                      style={{background: "#e2ece9", color: "#1d3557"}}>
                        Payment
                    </Button>
                </a>
                </Grid>

                <Grid item lg={4} md={2} xs={12}>
                <a href="#3">
                  <Button 
                    startIcon={<AttachMoneyIcon />} 
                    variant="filled" 
                    style={{background: "#dfe7fd", width: "210px", color: "#1d3557"}}>
                      Installment payment
                  </Button>
                </a>
                </Grid>
              </Grid>
        </Grid>
        <Grid item lg={6} xs={12}>

        </Grid>
      </Grid>
    </Container>
   </section>

   <section id='1'>
    <Container className='warranty__section'>
      <h1>Warranty</h1>
        <h2>I.Warranty Conditions</h2>
          <Grid container p={1} 
          rowSpacing={2} 
          columnSpacing={4} 
          borderRadius={"30px"}
          style={{
            background: "#fde2e4",
            margin: "40px 0",
          }} >
            <Grid item lg={4} xs={4}  style={{
                borderRight : "1px solid #fff",
                borderBottom : "1px solid #fff"
              }}>
              <h5>Qualified</h5> 
            </Grid>
            <Grid item lg={8} xs={8} style={{
                borderBottom : "1px solid #fff"
              }}>
                <div className='warranty__conditions'>
                  <ul>
                  <li>The product must have the intact seal if it has a seal on the product</li>
                  <li>For products with warranty stickers on the box: the product must come with a complete box.</li>
                  <li>The product must not have any scratches, dents, cracks, deformations compared to the original product.</li>
                </ul>
                </div>

            </Grid>


            <Grid item lg={4} xs={4} style={{
                borderRight : "1px solid #fff",
              }}>
              <h5>Not Qualified</h5> 
            </Grid>
            <Grid item lg={8} xs={8}>
            <div className='warranty__conditions'>
              <ul>
                <li>If the product has a seal on it, the seal must be intact.</li>
                <li>For products with warranty on the box: the product must be in the original box.</li>
                <li>The product must not be scratched, dented, broken, deformed compared to the original condition</li>
                <li>The warranty period has expired.</li>
                <li>There is no seal, or the seal has been tampered with or removed and the product is no longer in its original condition.</li>
                <li> The product is scratched, warped, cracked, or broken due to physical impact during use</li>
              </ul>
            </div>
            </Grid>
          </Grid>

          <h2>II.The Steps For Warranty</h2>
            <Grid container 
            columnSpacing={3}
            rowSpacing={5}
            justifyContent={"center"}
            p={{lg: 6,md:5,sm:4, xs:0}}
            >
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <div className='warranty_box_container'>
                    <div className='warranty_box'>
                      <h4>Step 1</h4>
                    </div>
                    <ul>
                      <li>Call the switchboard: 1800 1090</li>
                      <li>Chat directly with the store</li>
                      <li>Directly contact the store</li>
                    </ul>                
                  </div>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                <div className='warranty_box_container'>
                    <div className='warranty_box'>
                      <h4>Step 2</h4>
                    </div>
                    <ul>
                      <li>Bring the product that needs warranty service to the warranty center</li>
                      <li>Contact a customer service representative for assistance</li>
                    </ul>   
                  </div>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                <div className='warranty_box_container'>
                    <div className='warranty_box'>
                      <h4>Step 3</h4>
                    </div>
                    <ul>
                      <li>Complete the warranty process and hand over the product to the customer</li>
                    </ul>   
                  </div>
                </Grid>
          </Grid>
    </Container>
   </section>

   <section className='payment__section' id='2'>
    <Container>
      <h1>Payment</h1>
        <Box>
          <Grid container 
          columnSpacing={3}
          rowSpacing={5}
          justifyContent={"center"}
          p={{lg: 6,md:5,sm:4, xs:0}}
          >
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <div className='payment_box_container'>
                <div className='payment_box'>
                  <h4>Transfer payments</h4>
                  <img src={privacy_5} alt="" />
                </div>
                <h5>Customers can pay for their orders by transferring money to AGEARLE's account at the bank below</h5>
              </div>
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12}>
            <div className='payment_box_container'>
                <div className='payment_box'>
                  <h4>Direct payments</h4>
                  <img src={privacy_8} alt="" />
                </div>
                <h5>Customers can visit AGEARLE Showroom in Hanoi and Ho Chi Minh City to make direct payments using cash or card.</h5>
              </div>
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12}>
            <div className='payment_box_container'>
                <div className='payment_box'>
                  <h4>Payment on delivery</h4>
                  <img src={privacy_7} alt="" />
                </div>
                <h5>You will make the payment at the delivery location to the AGEARLE's delivery staff or the shipping company that AGEARLE uses.</h5>
              </div>
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12}>
              <div className='payment_box_container'>
                <div className='payment_box'>
                  <h4>Momo digital wallet</h4>
                  <img src={privacy_4} alt="" />
                </div>
                <h5>Open your MOMO Wallet application and scan the given QR code to complete your order</h5>
              </div>
            </Grid>

            <Grid item lg={4} md={6} sm={6} xs={12}>
              <div className='payment_box_container'>
                <div className='payment_box'>
                  <h4>ZaloPay digital wallet</h4>
                  <img src={privacy_6} alt="" />
                </div>
                <h5>Open your ZaloPay Wallet application and scan the given QR code to complete your order</h5>
              </div>
            </Grid>

          </Grid>
        </Box>
    </Container>
   </section>

   <section id='3'>
    <Container className='inPayment__section'>
      <h1>Installment payment</h1>
        <h2>I.Installment payment Conditions</h2>
          <Grid container p={1} 
          rowSpacing={2} 
          columnSpacing={4} 
          borderRadius={"30px"}
          alignItems={"center"}
          
          style={{
            background: "#dfe7fd",
            margin: "40px 0",
          }} >
            <Grid item lg={4} xs={4} textAlign={"center"} style={{
                borderRight : "1px solid #fff",
              }}>
              Qualified 
            </Grid>
            <Grid item lg={8} xs={8}>
                <h4>Vietnamese citizens between the ages of 18 and 70 must have:</h4>
                <div className='inPayment__conditions'>
                  <ul>
                    <li>Valid national identification card (ID)/citizen identification card (CCCD)</li>
                    <li>Household registration book in Ho Chi Minh City or Hanoi</li>
                </ul>
                </div>
            </Grid>
          </Grid>

          <h2>II.The Steps For Installment payment</h2>
            <Grid container 
            columnSpacing={3}
            rowSpacing={5}
            justifyContent={"center"}
            p={{lg: 6,md:5,sm:4, xs:0}}
            >
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <div className='inPayment_box_container'>
                    <div className='inPayment_box'>
                      <h4>Step 1</h4>
                    </div>
                    <ul>
                      <li>Customers can contact Us the hotline 1800.6975 to submit a purchase request</li>
                    </ul>                
                  </div>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                <div className='inPayment_box_container'>
                    <div className='inPayment_box'>
                      <h4>Step 2</h4>
                    </div>
                    <ul>
                      <li>STORE will review the application and notify the customer of the result. If the application meets the requirements, STORE will inform the customer of the time to bring the original documents to AGEARLE</li>
                    </ul>   
                  </div>
                </Grid>

                <Grid item lg={4} md={4} sm={6} xs={12}>
                <div className='inPayment_box_container'>
                    <div className='inPayment_box'>
                      <h4>Step 3</h4>
                    </div>
                    <ul>
                      <li>The customer brings the original documents to AGEARLE as scheduled, signs the contract, and receives the goods. The original documents will be returned to the customer after verification</li>
                    </ul>   
                  </div>
                </Grid>
          </Grid>
    </Container>
   </section>

   </>
  )
}

export default Privacy