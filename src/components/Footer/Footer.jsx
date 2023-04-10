import React from 'react'
import './Footer.css'
// import logo from '../../assets/img/logo.png'

import {Container, Grid, List, ListItem, ListItemText, ListItemIcon} from '@mui/material'
import { Link } from 'react-router-dom'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
     <footer className="footer">
      <Container>
        <Grid container columnSpacing={6}>
          <Grid item lg={4} textAlign={'justify'}>
            <div className="logo">          
                <h1 style={{color : 'white'}}>Agearle</h1>
            </div>
              <p className="footer__text">
              Have greater peace of mind. Protect your Agearle.com orders with Trade Assurance. Contact Verified Suppliers Online. Millions of Products at Factory Prices. Production Monitoring.
              </p>
          </Grid>

          <Grid item lg={3} p={0} paddingTop={0}>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <List>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='#'>Headphone</Link>
                    </ListItemText>
                </ListItem>
                  
                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='#'>Mouse</Link>
                    </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='#'>keyboard</Link>
                    </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='#'>Monitor</Link>
                    </ListItemText>
                </ListItem>
                
            </List>
            </div>
          </Grid>

          <Grid item lg={2}>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <List>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='/shop'>Shop</Link>
                    </ListItemText>
                </ListItem>
                  
                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='/cart'>Cart</Link>
                    </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='/login'>Login</Link>
                    </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemText>
                      <Link to='/privacy'>Privacy Policy</Link>
                    </ListItemText>
                </ListItem>
                
            </List>
          </div>
          </Grid>

          <Grid item lg={3}>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <List>

                <ListItem Grid disablePadding>
                <ListItemIcon><LocationOnOutlinedIcon/></ListItemIcon>
                <p>1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.</p>
                </ListItem>
                  
                <ListItem disablePadding>
                <ListItemIcon><LocalPhoneOutlinedIcon/></ListItemIcon>
                <p>1800 6975</p>
                </ListItem>

                <ListItem disablePadding>
                <ListItemIcon><EmailOutlinedIcon/></ListItemIcon>
                <p>CSKH@AGEARLE.COM</p>
                </ListItem>
            </List>
            </div>
          </Grid>

          <Grid item lg={12}>
            <p className='footer__copyright'>CopyRight {year} developed by Agearle. All rights reserved.</p>
          </Grid>

        </Grid>
      </Container>
     </footer>
    </>
  )
}

export default Footer