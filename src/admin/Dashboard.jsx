import React from "react";
import { Container,Grid } from "@mui/material";
import '../styles/dashboard.css' 
import img1 from '../assets/img/profile.png'
import useGetData from "../custom-hooks/useGetData";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";

import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 
import PrintIcon from '@mui/icons-material/Print';

export const Dashboard = () => {

    const {data: products} = useGetData('products')
    const {data: users} = useGetData('users') 

    const handleDetail = (id) => {
        document.getElementById(id).classList.toggle('active');
        // console.log(id);
      }

    return (
        <section className="admin_section">
            <Container>
                <Grid container>
                    <Grid item xs={12} className="dashboard_header"> 
                        <div className="revenue__box box"> 
                            <h5>TOTAL REVENUE</h5>
                            <span>10.280.000đ</span>
                        </div>
                        <div className="orders__box box">
                            <h5>TOTAL ORDERS</h5>
                            <span>58</span>
                        </div>
                        <div className="products__box box">
                            <h5>TOTAL PRODUCTS</h5>
                            <span>83</span>
                        </div>
                        <div className="users__box box">
                            <h5>TOTAL USERS</h5>
                            <span>145</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} className="dashboard_chart"> 
                        <div className="line_chart">
                            <LineChart />
                        </div>
                        <div className="pie_chart">
                            <PieChart />
                        </div>
                    </Grid>
                    <Grid item xs={12} className="dashboard_chart table_2">
                        <div className="new_user box">
                            <h5>NEW USERS</h5>
                            <ul className="new_user_list">
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Trần Công Bình</span>
                                </li>
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Trần Tấn Trung</span>
                                </li>
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Nguyễn Văn Toàn</span>
                                </li>
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Nguyễn Văn A</span>
                                </li>
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Phạm Văn C</span>
                                </li>
                                <li className="new_user_list_item">
                                    <img src={img1} className='admin__users'/>
                                    <span>Trần Tuấn B</span>
                                </li>
                            </ul>
                        </div>
                        <div className="new_order box">
                            <h5>NEW ORDERS</h5>
                            <table className='orders-table'>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer Name</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Note</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Status</th> 
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>OD01</td>
                                        <td>Nguyễn Thị Huyền Trâm</td>
                                        <td>0888278748</td>
                                        <td>Quận 12</td>
                                        <td>Giao trước 12 giờ</td>
                                        <td>24/04/2023</td>
                                        <td>690.000đ</td>
                                        <td className='delivering'>Delivering</td> 
                                    </tr>   

                                    <tr>
                                        <td>OD02</td>
                                        <td>Trần Tấn Trung</td>
                                        <td>01265814111</td>
                                        <td>Bà Điểm</td>
                                        <td></td>
                                        <td>22/04/2023</td>
                                        <td>2.390.000đ</td>
                                        <td className='done'>Done</td> 
                                    </tr>   
                                    
                                    <tr>
                                        <td>OD03</td>
                                        <td>Nguyễn Văn Toàn</td>
                                        <td>0933512513</td>
                                        <td>Đăk Lăk</td>
                                        <td>Giao cuối tuần</td>
                                        <td>23/04/2023</td>
                                        <td>790.000đ</td>
                                        <td className='cancel'>Cancel</td> 
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}