import { Grid } from '@mui/material';
import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({data}) => {
  return (
   <>
   <Grid container spacing={2}>
   {
    data?.map((item,index) => (
      <ProductCard item={item} key={index}/>
    ))
   }
   </Grid>
   
   </>
  );
};

export default ProductsList