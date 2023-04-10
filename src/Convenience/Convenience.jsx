import React from 'react'
import '../Convenience/convenience.css'
import ConvenienceData from '../assets/data/ConvenienceData'

import { Container, Grid } from '@mui/material'
const Convenience = () => {
  return (

   <>
   <section>
    <Container>
        <div className='about__convenience_title'>
            <h1>The facilities in the showroom</h1>
        </div>
        <Grid container rowSpacing={3} columnSpacing={3} className='about__convenience'>
           
            {
                ConvenienceData.map((item,index) => (
                    <Grid item lg={3} xs={6} sm={4} className='about__items' key={index}>
                        <span>{item.icon}</span>
                        <div className='about__text'>
                            <h1>{item.title}</h1>
                        </div>
                    </Grid> 
                ))
            }
        </Grid>
    </Container>
   </section>
   </>
  )
}

export default Convenience