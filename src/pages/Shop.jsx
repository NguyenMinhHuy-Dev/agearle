import React,{useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet';

import CommonSection from '../components/UI/CommonSection';
import {Container, Grid} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import products from '../assets/data/Products';
import ProductsList from '../components/UI/ProductsList';
import "../styles/shop.css";

const Shop = () => {
    const [selected, setSelected] = useState("");
    const  [productsData, setProductsData] = useState(products) 

    const handleFilter = e =>{
        const filterValue = e.target.value
        if(filterValue === "All"){
            setProductsData(products);
        }
        if(filterValue==="Keyboard"){
            const filteredProducts = products.filter(
                (item) => item.category === "Keyboard"
            );
        
             setProductsData(filteredProducts);
            }
            if(filterValue==="Computer Mouse"){
                const filteredProducts = products.filter(
                    (item) => item.category === "Computer Mouse"
                );
            
            setProductsData(filteredProducts);
                }
            if(filterValue==="Headphone"){
                    const filteredProducts = products.filter(
                        (item) => item.category === "Headphone"
                    );
                
                setProductsData(filteredProducts);
                    }
            if(filterValue==="Monitor"){
                        const filteredProducts = products.filter(
                            (item) => item.category === "Monitor"
                        );
                    
                    setProductsData(filteredProducts);
            }
    };

    const handleSortPrice = e =>{ 
        setSelected(e.target.value);
        const sortPrice = e.target.value
        if(sortPrice === 'ascending'){
            const sortPriceProduct = productsData.sort((a,b) => a.price - b.price);
            setProductsData(sortPriceProduct);
            // console.log(products)
        }
        if(sortPrice === 'descending'){
            const sortPriceProduct = productsData.sort((a,b) => b.price - a.price);
            setProductsData(sortPriceProduct);
            // console.log(products)
        }
        if(sortPrice === 'All'){
            setProductsData(products);
        }
    };   

    const handleSearch = e =>{
        const searchTerm = e.target.value;

        const searchedProducts = 
        products.filter(item =>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        setProductsData(searchedProducts);
    };

    
    // useEffect(()=> {
    //     window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    // })

    return ( 
        <>
        <Helmet title={"Shop"}></Helmet>
        <CommonSection title="Products" />
           
            <section >
                <Container>
                    <Grid container className='category'>
                        <Grid lg={3} md={3} xs={6}>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                            <option value={"All"}>Filter By Category</option>
                                <option value="Keyboard"> Keyboard</option>
                                <option value="Computer Mouse">Computer Mouse</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Monitor">Monitor</option>
                               
                            </select>
                        </div>
                        </Grid>
                        <Grid lg={3} md={6} xs={6}>
                        <div className="filter__widget">
                            <select value={selected} onChange={handleSortPrice}>
                            <option>Sort By</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                                
                            </select>
                        </div>
                        </Grid>
                        <Grid lg={6} md={12} xs={12}>
                            <div className="search__box">
                                <input type="text" placeholder = "Search......" onChange={handleSearch} />
                                <span>
                                    <SearchIcon/>
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section>
                <Container>
                    <Grid container justifyContent={'center'}>
                        {
                            productsData.length === 0? 
                            <h1 className="text-centerfs-4">
                                No products are found!
                            </h1>
                            : <ProductsList data={productsData}/>
                        }
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Shop