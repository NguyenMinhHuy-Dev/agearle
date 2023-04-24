import React from 'react'
import { Container, Grid } from '@mui/material'
import '../styles/Orders.css'

const Orders = () => {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <h1 className='admin__orders-title'>Orders</h1>
          </Grid>
          <Grid item xs={12}>
            <table className='orders-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                </tr>
                <tr>
                  
                </tr>
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Orders
