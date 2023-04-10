import React from 'react'
import '../../styles/Product-cart.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
//tram them
// import {  toast } from 'react-toastify';
import {useDispatch} from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Grid} from '@mui/material';

const ProductCard = ({item}) => {
     //tram them
     const dispatch = useDispatch()
     const addToCart =()=>{
         dispatch(
             cartActions.addItem({
             id: item.id,
             productName:item.productName,
             price: item.price,
             imgUrl: item.imgUrl,
         })
         );
         toast.success('Product added successfully');
     };
     //
  return (
    <>
    <Grid item lg={2} sm={3} mb={6} xs={6}>
        <div className="product__item">

            <div className="product__img">
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt=""></motion.img>
            </div>

            <div className="product__info">
                <h3 className="product__name">
                    <Link to= {`/shop/${item.id}`}>{item.productName}</Link>
                </h3>
            <span>{item.category}</span>
            </div>

            <div className="product__card-bottom">
                <span className='price'>{item.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span>
                <motion.span whileTap={{scale: 1.2}} onClick={addToCart} className='icon__plus'><AddOutlinedIcon/></motion.span>
            </div>

        </div>
    </Grid>
    </>
  )
}

export default ProductCard