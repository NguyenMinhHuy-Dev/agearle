import React from 'react'
import '../Services/Services.css'

import {motion} from 'framer-motion'
import serviceData from '../assets/data/SercviceData'

import { Container, Grid } from '@mui/material'

const Services = () => {
  return (
   <>
   <Container>
        <Grid container paddingTop={5} spacing={3} textAlign={'justify'} >
          {
            serviceData.map((item,index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div whileHover={{scale: 1.1}} className="service__item" style={{background: `${item.bg}`}}>
                    <span>{item.icon}</span>
                    <div className='service__title'>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                </motion.div>
            </Grid> 
            ))
          }
        </Grid>
   </Container>
   </>
  )
}

export default Services