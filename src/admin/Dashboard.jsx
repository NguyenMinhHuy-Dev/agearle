import React from "react";
import { Container,Grid } from "@mui/material";
import '../styles/dashboard.css' 

import useGetData from "../custom-hooks/useGetData";


export const Dashboard = () => {

    const {data: products} = useGetData('products')
    const {data: users} = useGetData('users')

    return (
        <section className="admin_section">
            <Container>
                <Grid container>
                    <Grid item xs={12} className="dashboard_header"> 
                        <div className="revenue__box"> 
                            <h5>TOTAL REVENUE</h5>
                            <span>10.280.000đ</span>
                        </div>
                        <div className="orders__box">
                            <h5>TOTAL ORDERS</h5>
                            <span>58</span>
                        </div>
                        <div className="products__box">
                            <h5>TOTAL PRODUCTS</h5>
                            <span>83</span>
                        </div>
                        <div className="users__box">
                            <h5>TOTAL USERS</h5>
                            <span>145</span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}