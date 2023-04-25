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
                    <Grid items xs={3}>
                        <div className="revenue__box">
                            <h5>Total Sales</h5>
                            <span></span>
                        </div>
                    </Grid>
                    <Grid items xs={3}>
                        <div className="orders__box">
                            <h5>Orders</h5>
                            <span></span>
                        </div>
                    </Grid>
                    <Grid items xs={3}>
                        <div className="products__box">
                            <h5>Total Products</h5>
                            <span>{products.length}</span>
                        </div>
                    </Grid>
                    <Grid items xs={3}>
                        <div className="users__box">
                            <h5>Total Users</h5>
                            <span>{users.length}</span>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}