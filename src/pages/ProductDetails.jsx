import React, {useState, useRef,useEffect} from 'react';
import {Container, Grid} from "@mui/material";
import { useParams } from 'react-router-dom';
import products from '../assets/data/Products';
import CommonSection from '../components/UI/CommonSection';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import '../styles/product-details.css'
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux';
import {cartActions} from "../redux/slices/cartSlice";
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import useGetData from '../custom-hooks/useGetData';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';


const ProductDetails = () => {
    const [tab, setTab] = useState('desc');
    const reviewUser = useRef("");
    const reviewMsg = useRef("");
    const dispatch = useDispatch();
    const [rating, setRating]= useState(null);
    const {id} = useParams(); 

    const {data:productData, loading} = useGetData('products');  

    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]); 
    // const relatedProducts = products.filter(item=> item.category===category)

    const [productReviews, setProductReviews] = useState([]);

    const [avgRating, setArgRating] = useState(0);

    useEffect(() => {
          
        const productFilter = productData.find((item)=> item.id === id)
        setProduct(productFilter)   
        setProductReviews(productFilter?.reviews) 
        setArgRating(productFilter?.avgRating)

        const productRelated = productData.filter(item => item.category === productFilter.category)
        setRelatedProducts(productRelated);
    }, [loading])

    useEffect(() => {
        var sum = 0;
        productReviews?.map((item) => {
            sum = sum + item.rating;
        })
        if (productReviews?.length > 0) {
            setArgRating((sum / productReviews?.length).toFixed(1));
            const docRef = doc(db, "products", id);
            updateDoc(docRef, { 
                avgRating: (sum / productReviews?.length).toFixed(1), 
            })
        }
        else
            setArgRating(0);
    }, [productReviews])
 
   
    const submitHandler = async (e) => {
        e.preventDefault();
        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg  = reviewMsg.current.value;
        
        const reviewObj ={
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }; 
 
        setProductReviews([...productReviews, reviewObj]);
        toast.success("Review submited!");

        const docRef = doc(db, "products", id);
        await updateDoc(docRef, {  
            reviews: arrayUnion(reviewObj)
        })

    };

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: product.id,
            imgUrl: product.imgUrl, 
            productName: product.productName,
            salePrice: product.salePrice,
        }));
        toast.success("Product added successfully");
    };

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    },[product]);

    return ( 
        <div>
            <Helmet title={product?.productName}/>
            <CommonSection title={product?.productName}/>

                <Container>
                    <Grid container className='p-details' columnSpacing={5} alignItems={'center'}>
                        <Grid item lg={6} className='p-img' >
                            <motion.img whileHover={{scale: .9}} src={product?.imgUrl} alt={product?.productName}></motion.img>
                        </Grid>
                        <Grid item lg={6}>
                            <div className='product__details'>
                                <h2>{product?.productName}</h2>
                                <div className='product__rating'>
                                    <div>
                                        <span><StarIcon/></span>
                                        <span><StarIcon/></span>
                                        <span><StarIcon/></span>
                                        <span><StarIcon/></span>
                                        <span><StarHalfIcon/></span>
                                    </div>
                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>
                                <div className='product__price__container'>
                                    <span className='product__price'>Price: {parseInt(product?.salePrice).toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</span>
                                    <span style={{fontSize: "1rem"}}>Category: {product?.category.toUpperCase()}</span>
                                </div>
                               
                                <p style={{marginTop: '30px', marginBottom: '30px'}}>{product?.shortDesc}</p>
                                <div>
    
                                    <motion.button whileTap={{scale: 1.2}} 
                                    className='buy__btn' onClick={addToCart}>Add to cart</motion.button>
                                </div>
                                </div>    
                        </Grid>
                    </Grid>
                </Container>
            
            <section>
                <Container>
                    <Grid className='wrapper__des'> 
                        <Grid item lg={12}>
                            <div className='tab__wrapper'>
                                <h6 className={`${tab==='desc' ? 'active__tab' : ""}`}
                                onClick={()=> setTab('desc')}>Description</h6>

                                <h6 className={`${tab==='rev' ? 'active__tab' : ""}`}
                                 onClick={()=> setTab('rev')}>Reviews 
                                    [{productReviews?.length}]
                                    </h6>
                            </div>
                            {tab === "desc" ? (
                                <div className='tab__content'>
                                <img src={product?.description} alt=''></img>
                            </div>
                            ) :( 
                                <div className='product_review'>
                                    <div className='review_wrapper'>
                                        <ul>
                                            {productReviews?.map((item, index)=>(
                                                <li kew={index} style={{marginBottom:'30px'}}>
                                                    <h6>{item.userName}</h6>
                                                    <span>{item.rating}(rating)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))}
                                        </ul> 
                                        <div className='review__form'>
                                            <h4>Leave your experience</h4>
                                            <form onSubmit={submitHandler}>
                                                <div className='form__group'>
                                                    <input 
                                                        type="text" 
                                                        placeholder='Enter name' 
                                                        ref={reviewUser}  
                                                        required
                                                    />
                                                </div>
                                                <div className='form__group rating__group'>
                                                    <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(1)}>1<StarBorderOutlinedIcon/></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(2)}>2<StarBorderOutlinedIcon></StarBorderOutlinedIcon></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(3)}>3<StarBorderOutlinedIcon></StarBorderOutlinedIcon></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(4)}>4<StarBorderOutlinedIcon></StarBorderOutlinedIcon></motion.span>
                                                    <motion.span whileTap={{scale:1.2}} onClick={()=>setRating(5)}>5<StarBorderOutlinedIcon></StarBorderOutlinedIcon></motion.span>
                                                </div>
                                                <div className='form__group'>
                                                    <textarea 
                                                        ref={reviewMsg} 
                                                        rows={4} 
                                                        type="text" 
                                                        placeholder='Review Message...'
                                                        required 
                                                    />
                                                </div>
                                                < motion.button 
                                                    whileTap={{scale:1.2}}  
                                                    type='submit' 
                                                    className='buy__btn'
                                                >
                                                    Submit
                                                </motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </div> 
                            )}
                            
                        </Grid>  

                        <Grid item lg={12} p={6}>
                            <h2 className='related__title'>You might also like</h2>
                        </Grid>
                        <ProductsList data={relatedProducts}/>
                    </Grid>
                </Container>
            </section>
        </div>
     
    );
};

export default ProductDetails;