import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import '../styles/cart.css';
import CommonSection from '../components/UI/CommonSection';
import { Container, Grid,IconButton} from '@mui/material';
import { Table,TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {motion} from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import { confirmAlert } from 'react-confirm-alert';
import Cart2 from '../Cart_quantity/Cart_quantity';
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state)=> state.cart.totalAmount);

    return  (
        <>
        <Helmet title='Cart' />
          <CommonSection title='Shopping Cart' /> 
            <section>
                <Container>
                    <Grid container columnSpacing={5} justifyContent={"space-between"}>
                        <Grid item lg={9} alignItems={'center'} display={"flex"}>
                        {
                          cartItems.length === 0 ? 
                          (
                          <div style={{display: "flex", width: '100%' , justifyContent:'center', alignItems: "center"}}>
                            <h2 style={{textAlign: "center", fontSize: "2rem"}}>No item added to the cart</h2>
                          </div>
                          
                          ):(
                          <Table className="table bordered">
                          <TableHead>
                            <TableRow>
                              <TableCell>Image</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell style={{textAlign: "center"}}>Price</TableCell>
                              <TableCell style={{textAlign: "center"}}>Qty</TableCell>
                              <TableCell style={{textAlign: "center"}}>Delete</TableCell>
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

                          )
                        }
                        </Grid>
                          
                        <Grid item lg={3}>
                        <div>
                            <h6 className='d-flex align-items-center justify-content-between'>
                              Subtotal
                              <span className='fs-4 fw-bold text-black' style={{color: "black"}}> {totalAmount.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span>
                            </h6>
                        </div>
                          <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                          <div>
                            <motion.button whileTap={{scale: 1.2}} className='buy__btn w-100'><Link className='text-underline white' to='/checkout'>Checkout</Link></motion.button>
                            </div>
                            <div>
                            <motion.button whileTap={{scale: 1.2}} className='buy__btn w-100 mt-3'><Link className='text-underline white' to='/shop'>Continue Shopping</Link></motion.button>
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

  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItems(item.id))
  }
  
  const addToCart = () => {
    dispatch(cartActions.addItem({
        id: item.id,
        image: item.imgUrl, 
        productName: item.productName,
        price: item.price,
    }));
  };

  const removeToCart = () =>{
    dispatch(cartActions.removeItems({
      id: item.id,
      image: item.imgUrl, 
      productName: item.productName,
      price: item.price,
  }));
  }
  function submit (){
    confirmAlert({
      title: "WARMING",
      message: "Are you sure delete this product?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteProduct(),
        },
        {
          label: "No"
        }
      ]
    })
  }
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
            {item.quantity <=1 ? (
              <IconButton onClick={submit}><RemoveTwoToneIcon /></IconButton>

            ):(
              <IconButton onClick={removeToCart}><RemoveTwoToneIcon /></IconButton>

            )}
            {/* <IconButton onClick={removeToCart}><RemoveTwoToneIcon /></IconButton> */}
              {/* <input value = {item.quantity}></input> */}
              <TextField 
              id="standard-basic" 
              variant="standard" 
              value = {item.quantity}
              className={'format__quantity'}/>
            <IconButton onClick={addToCart}><AddSharpIcon/></IconButton>
              
          </TableCell>
          <TableCell style={{textAlign: "center"}}>
            <motion><DeleteForeverIcon whileTap={{ scale: 1.2 }} onClick={submit} className='cart_delicon'></DeleteForeverIcon></motion>
          </TableCell>
        </TableRow>
    </>
  )
}

export default Cart;