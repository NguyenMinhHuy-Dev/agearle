import React ,{useState, useEffect}from 'react'
import '../styles/Home.css'

import heroImg from '../assets/img/Home-1.png'
import Helmet from '../components/Helmet/Helmet';
import { Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import {motion} from 'framer-motion'
import products from '../assets/data/Products'
import counterImg from '../assets/img/Count_2.png'
import counterImg2 from '../assets/img/Home-3.png'

import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';

import Clock from '../components/UI/Clock';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../config/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import ProductCard from '../components/UI/ProductCard';
 

const Home = () => {

    const {data:productData, loading} = useGetData('products'); 

    const[trendingProducts, setTrendingProducts] = useState([]);
    const[bestSales, setBestSales] = useState([]);
    const[newArrivals, setNewArrivals] = useState([]);
    const[popular, setPopular] = useState([]);
 


    const year = new Date().getFullYear();

    useEffect(() => {       
        const getData = () => {
            const filteredTrendingProducts = productData.filter((item) => item.title ===  'Trending');
            const filteredBestSales = productData.filter((item) => item.title ===  'BestSales');
            const filteredNewArrivals = productData.filter((item) => item.title ===  'New');
            const filteredPopular = productData .filter((item) => item.title ===  'Popular');
    
    
            setTrendingProducts(filteredTrendingProducts);
            setBestSales(filteredBestSales);
            setNewArrivals(filteredNewArrivals);
            setPopular(filteredPopular);
        }
        
        getData();

    },[loading]);  

    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, [])

    return ( 
        <>
        <Helmet title={"Home"}/>
        <section className="hero__section">
            <Container padding={30}>
                <Grid container spacing={5} textAlign={'justify'} alignContent={'center'}>

                    <Grid item xs={12} sm={6} lg={6}>
                        <Typography paragraph={true} textAlign={'start'}>
                        <div className="hero__content">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2 >Make Your Interior More Minimalistic & Modern</h2>
                            <p>
                            Agearle Inc. is a multi-national technology company based in Ha Noi, VN, focusing on cloud computing, digital streaming, artificial intelligence, and e-commerce. This company is considered one of the Big Four technology companies along with Google, Apple, and Facebook.
                            </p>
                            <NavLink to='/shop'>
                                <motion.button whileTap={{scale:1.2}}className="buy__btn">
                                    SHOP NOW
                                </motion.button>
                            </NavLink>
                        </div>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={6}>
                        <div className="hero__img">
                            <img src={heroImg} alt=""></img>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </section>

        <Services/>

        <section className='trending__products'>
            <Container>
                <Grid container>
                    <Grid item lg={12} >
                        <h2 className='section__title'>Trending Product</h2>
                    </Grid>
                    <ProductsList data={trendingProducts}/>  
                </Grid>
            </Container>
        </section>

        <section className='best__sales'>
            <Container>
                <Grid container>
                        <Grid item lg={12} className='text-center'>
                            <h2 className='section__title'>Best Sales</h2>
                        </Grid>
                        <ProductsList data={bestSales}/>
                </Grid>
            </Container>
        </section>

        <section className="timer__count">
            <Container>
                <Grid container>
                
                    <Grid item lg={6} md={6} xs={6}>
                        
                        <Clock date='Apr 27, 2023'/>

                        <motion.button whileHover={{scale: 1.2}} className="buy__btn store__btn">
                            <Link to ='/shop'>Visit Store</Link>
                        </motion.button>
                    </Grid>

                    <Grid item lg={6} md={6} xs={6} textAlign={'end'}>
                        <img src={counterImg} alt=''></img>
                    </Grid>
                </Grid>
            </Container>
        </section>

        <section className="new__arrivals">
            <Container>
                <Grid container>
                    <Grid item lg={2} sm={3} mb={6} xs={6} className='text-center'>
                        <h2 className='section__title'>New Arrivals</h2>
                    </Grid>
                        <ProductsList data={newArrivals}/>
                    </Grid>
            </Container>
        </section>

        <section className="popular__products">
            <Container>
                <Grid container>
                    <Grid item lg={2} sm={3} mb={6} xs={6} className='text-center'>
                        <h2 className='section__title'>Popular</h2>
                    </Grid>
                        <ProductsList data={popular}/>
                    </Grid>
            </Container>
        </section>
        </>

    
    )
};

export default Home