import React, { useEffect,useState } from 'react'
import '../ScrollToTop/ScrollToTop.css'

import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const ScrollToTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
    const listenToScroll = () => {

      let heightToHidden = 250;
      const winScroll = 
      document.body.scrollTop || document.documentElement.scrollTop;

      if(winScroll > heightToHidden){
        setIsVisible(true);
      }else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', listenToScroll);
    },[]);
  return (
    <>
    <div className='wrapper__scrollToTop'>
      {isVisible && (
      <div className="top-btn" onClick={ScrollToTop}>
          <ArrowUpwardOutlinedIcon className='top-btn__icon'/>
      </div>

      )}
    </div>
    </>
  );
};



export default ScrollToTop