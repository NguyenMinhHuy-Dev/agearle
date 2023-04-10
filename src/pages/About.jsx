import React, { useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Grid } from '@mui/material';
import '../styles/about.css'
import ImageSlider from '../components/UI/ImageSlider'
import Convenience from '../Convenience/Convenience';
import privacy_1 from '../assets/img/privacy_1.png'
// import {motion} from 'framer-motion'

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
const About = () => {
  const slides_1 = [
    { url: "https://trainghiemso.vn/wp-content/uploads/2021/01/IMG_3957.jpg", title: "sr1" },
    { url: "https://images2.thanhnien.vn/uploaded/baont/2021_01_21/gearvn6_ZEDP.jpg?width=500", title: "sr2" },
    { url: "https://genk.mediacdn.vn/2018/1/26/dscf9268-1516958199620758011120.jpg", title: "sr3" },
  ];
  const slides_2 = [
    { url: "https://nhanhmua.com/wp-content/uploads/2021/01/IMG_3987.jpg", title: "sr1" },
    { url: "https://c8n8e4j6.rocketcdn.me/wp-content/uploads/2021/01/gearvn-khai-truong-showroom-hi-end-pc-va-gaming-gear-ngay-tai-trung-tam-thanh-pho-ho-chi-minh-19.jpg", title: "sr2" },
    { url: "https://thoisutoancanh.com/upload/crawler/gearvn-khai-truong-showroom-hi-end-pc-va-gaming-gear-tai-quan-1-thanh-pho-ho-chi-minh-1611214709-3.jpg", title: "sr3" },
  ];

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  })

  return (
    <>
    <Helmet title={"About"}/>

    <section className='wrapper__about'>
      <Container >
        <Grid container 
        justifyContent={"center"} 
        alignContent={"space-around"}
        >
          <Grid item lg={6} sm={6} xs={12} textAlign={"center"}>
              <h6>Contact Us</h6>
              <img src={privacy_1} alt=''></img>
          </Grid>
          <Grid item lg={6} sm={6} xs={12} 
          display={"flex"} 
          flexDirection={"column"} 
          justifyContent={"space-between"}
          >
            <h1>SHOWROOM</h1>
            <svg viewBox="0 0 960 300" className='wrapper__about__svg'>
              <symbol id="s-text">
                <text text-anchor="middle" x="50%" y="80%">AGEARLE</text>
                <text text-anchor="middle" x="52%" y="80%">AGEARLE</text>  
              </symbol>
              <g class = "g-ants">
                <use href="#s-text" class="text-copy"></use>
                <use href="#s-text" class="text-copy"></use>
                <use href="#s-text" class="text-copy"></use>
                <use href="#s-text" class="text-copy"></use>
                <use href="#s-text" class="text-copy"></use>
              </g>
            </svg>
            <Container>
            <Grid container>
              <Grid item lg={4} sm={4} xs={12}>
                  <div className='contact'>
                      <span><EmailIcon/></span>
                      <h5>Agearle@gmail.com</h5>
                  </div>
              </Grid>
              <Grid item lg={4} sm={4} xs={12}>
                  <div className='contact'>
                    <span><PhoneIcon/></span>
                    <h5>1800 6975</h5>
                  </div>
              </Grid>
              <Grid item lg={4} sm={4} xs={12}>
                  <div className='contact'>
                    <span><LanguageIcon/></span>
                    <h5>www.Agearle.com</h5>
                  </div>
              </Grid>
            </Grid>
            </Container>

            
            
          </Grid>
        </Grid>
      </Container>
    </section>

    <section>
      <Container >
        <Grid container alignItems={"center"} columnSpacing={6} rowSpacing={6}>
          <Grid item xs={12} sm={12} lg={6} justifyContent={"center"} className='location_text' >
              <h3>SHOWROOM AGEARLE</h3>
              <p>Quận 10</p>
              <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7463079304694!2d106.6748891147712!3d10.754024892336703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f026fbe5beb%3A0x4544fd0c51a55c38!2zMTA4NCDEkC4gVHLhuqduIEjGsG5nIMSQ4bqhbywgUGjGsOG7nW5nIDEsIFF14bqtbiA1LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1680968834165!5m2!1svi!2sus" 
             
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} >
              <div className='container_slide'>
              <ImageSlider slides={slides_1} />
              </div>
            </Grid>
        </Grid>
        
      </Container>
    </section>

    <section>
      <Container >
        <Grid container alignItems={"center"} columnSpacing={6} rowSpacing={6}>
          <Grid item xs={12} sm={12} lg={6} justifyContent={"center"} className='location_text' >
              <h3>SHOWROOM AGEARLE</h3>
              <p>Thành phố Thủ Đức</p>
              <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5091979007734!2d106.75109741477202!3d10.848821992272407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bc2b5177af%3A0x7cad23b5ed0e3911!2zOTA0IMSQLiBLaGEgVuG6oW4gQ8OibiwgVHLGsOG7nW5nIFRo4buNLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1680968726450!5m2!1svi!2sus" 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={12} sm={12} lg={6} >
              <div className='container_slide'>
                <ImageSlider slides={slides_2} />
              </div>
            </Grid>
        </Grid>
        
      </Container>
    </section>

    <Convenience/>

    </>
  )
}

export default About