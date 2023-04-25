import { useEffect, useRef } from "react";
import { Container, Grid } from '@mui/material'; 
import logo from '../assets/img/logo.png'
import userIcon from '../assets/img/profile.png'
import { NavLink, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import useAuth from '../custom-hooks/useAuth';
import { auth } from '../config/firebase'; 
import { signOut } from 'firebase/auth';
import '../components/Header/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import './Admin.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Row } from "react-bootstrap";

const admin__nav = [
    {
        display: 'Dashboard',
        path: '/dashboard'
    },
    {
        display: 'Products',
        path: '/dashboard/all-products'
    },
    {
        display: 'Orders',
        path: '/dashboard/orders'
    },
    {
        display: 'Users',
        path: '/dashboard/users'
    },
    {
        display: 'Limited Products',
        path: '/dashboard/limited-products'
    },
]

export const AdminNav = () => {
    const { currentUser } = useAuth();

    const headerRef = useRef(null);
    const stickyHeaderFunc = () =>{
        window.addEventListener("scroll",() => {
          if(document.body.scrollTop > 29 || document.documentElement.scrollTop > 29){
            headerRef.current.classList.add("sticky__header")
          }else{
            headerRef.current.classList.remove("sticky__header")
          }
        });
    };
    useEffect(() => {
        stickyHeaderFunc();
   
        return () => window.removeEventListener("scroll", stickyHeaderFunc);
    });
    
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth);
        navigate('/login');
        sessionStorage.clear();
    } 

    const handleSearch = e =>{
        const searchTerm = e.target.value;

    };

    return (
        <>
            <header className="header" ref={headerRef}>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                        <div className="nav__wrapper">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                                <div>
                                <NavLink to ='/home' style={{textDecorationLine: 'none', color: "black"}}>
                                <h1>Agearle</h1>
                                </NavLink>
                                </div>
                            </div>
    
                            {/* <div className="nav__search">
                                <div className="search__box">
                                    <input type="text" placeholder = "Search......" onChange={handleSearch} />
                                    <span>
                                        <SearchIcon/>
                                    </span>
                                </div>
                            </div>  */}

                            <div className="admin__navigation">
                                <ul className="admin__menu-list">
                                    {admin__nav.map((item, index) => 
                                        <li className="admin__menu-item" key={index}>
                                            <NavLink to={item.path}>{item.display}</NavLink>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            
                            <div className="nav__icons">
                                <NavLink >
                                    <span className='cart__icon'><SettingsOutlinedIcon/> 
                                    </span>
                                </NavLink>

                                <NavLink >
                                    <span className='cart__icon'><NotificationsActiveOutlinedIcon/> 
                                    </span>
                                </NavLink>

                                <div  className='user-icon'>
                                    <NavLink to='/login'>
                                    <span>
                                        <motion.img whileTap={{scale:1.2}} src={sessionStorage.getItem("isLogged") ? currentUser.photoURL : userIcon} alt=''/>
                                    </span>

                                    </NavLink>  
                                    {sessionStorage.getItem("isLogged") && 
                                    <>
                                        <div className='user_info'>
                                        {sessionStorage.getItem("typeUser") && 
                                        <>
                                            <a href='/dashboard' className='user-link'>Dashboard</a>
                                        </>}
                                        <a href='/user' className='user-link'>User profile</a>
                                        <p className='user-link' onClick={handleLogOut}>Logout</p>
                                        </div>
                                    </>}
                                </div> 
                            </div>
                        </div>    
                    </Grid>
                </Container>
            </header>

            {/* <section className="admin__menu">
                <Container>
                    <Row>
                        <div className="admin__navigation">
                            <ul className="admin__menu-list">
                                {admin__nav.map((item, index) => 
                                    <li className="admin__menu-item" key={index}>
                                        <NavLink to={item.path}>{item.display}</NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section> */}
      </>
    );
}