import React , {useRef, useEffect} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Container, Grid } from '@mui/material';

import {motion} from 'framer-motion'

import logo from '../../assets/img/logo.png'
import userIcon from '../../assets/img/profile.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
//tram them
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';

const nav__link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  // {
  //   path: 'cart',
  //   display: 'Cart'
  // },
  {
    path: 'about',
    display: 'About'
  },
]

const Header = () => { 
  const { currentUser } = useAuth();

  const menuRef = useRef();
  const headerRef = useRef(null);
  //
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  // const navigateToCart =()=>{
  //   navigate("/cart")
  // }
  //
  // scroll header
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
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  //-----------------------------
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

                <div className="navigation" ref={menuRef} onClick={menuToggle}>
                  <ul className="menu">

                    {
                      nav__link.map((item,index)=>(
                        <li className="nav__item" key={index}>
                      <NavLink to ={item.path} className={(navClass)=>
                        navClass.isActive ? "nav__active" : ""}
                      >
                          {item.display}
                      </NavLink>
                    </li>
                      ))
                    }

                  </ul>
                </div>

                <div className="nav__icons">
                  <span className='fav__icon'><FavoriteBorderIcon/>
                    <span className="badge">1</span>
                  </span>
                    <NavLink to='/cart'>
                  <span className='cart__icon'>< ShoppingCartOutlinedIcon/>
                    <span className="badge">{totalQuantity}</span>
                  </span>
                  </NavLink>
 
                  <NavLink to='/login'>
                    <span>
                      <motion.img whileTap={{scale:1.2}} src={currentUser ? currentUser.photoURL : userIcon} alt=''/>
                    </span>
                  </NavLink>  

                  <div className="mobile_menu">
                  <span className='mobile_menu__icon' onClick={menuToggle}><MenuIcon/></span>
                </div>
                </div>



            </div>    
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default Header