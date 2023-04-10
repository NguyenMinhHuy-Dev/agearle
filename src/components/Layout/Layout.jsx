import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


const Layout = () => {
  return (
   <>
  
   <Header/>
   
    <div>
        <Routers/>
    </div>

    <ScrollToTop/>
    <Footer/>
    
   </>
  )
}

export default Layout