import React from 'react'
import '../styles/User.css'
import ava from '../assets/img/profile.png';
import Helmet from '../components/Helmet/Helmet';
import { Container} from '@mui/material';
const User = () => {
  return (
    <>
    <Helmet title='User'></Helmet>
    <section>
    <Container>
    <div class="wrapper__user">
        <div class="left">
            <img src={ava} alt="user" width="100"/>
              <h4>Alex William</h4>
              <p>UI Developer</p>
        </div>
        <div class="right">
            <div class="info">
                <h2>My Profile</h2>
                <div class="info_data">
                    <div class="data">
                        <h3>Name</h3>
                        <p>Anh</p>
                    </div>
                    <div class="data">
                      <h3>Email</h3>
                        <p>anhpham@gmail.com</p>
                    </div>
                    <div class="data">
                      <h3>Phone</h3>
                        <p>0001-213-998761</p>
                    </div>
                    <div class="data">
                      <h3>Password</h3>
                        <p>***********</p>
                    </div>
                    <div class="data">
                      <h3>Address</h3>
                        <p>Thành Phố Hồ Chí Minh</p>
                    </div>
                    <div class="data">
                      <h3>Birthday</h3>
                        <p>23-11-2002</p>
                    </div>
                </div>
            </div>
          
                   
          </div>
</div>
    </Container>
    </section>
    
    </>
  )
}

export default User