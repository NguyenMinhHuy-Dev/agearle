import React, { useEffect, useState } from 'react'
import '../styles/User.css'
import ava from '../assets/img/profile.png';
import Helmet from '../components/Helmet/Helmet';
import { Container} from '@mui/material';
import useAuth from '../custom-hooks/useAuth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const { currentUser } = useAuth();   

  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth);
    navigate('/login');
    sessionStorage.clear();
  }

  return (
    <>
    <Helmet title='User'></Helmet>
    <section>
    <Container>
    <div class="wrapper__user">
        <div class="left">
            <img src={currentUser.photoURL} alt="user" width="100"/>
              <h4>{currentUser.displayName}</h4>
              <p>{sessionStorage.getItem("typeUser") === 0 ? 'Customer' : 'Employee'}</p>
        </div>
        <div class="right">
            <div class="info">
                <h2>My Profile</h2>
                <div class="info_data">
                    <div class="data">
                        <h3>Name</h3>
                        <p>{currentUser.displayName}</p>
                    </div>
                    <div class="data">
                      <h3>Email</h3>
                        <p>{currentUser.email}</p>
                    </div>
                    <div class="data">
                      <h3>Phone</h3>
                        <p>{sessionStorage.getItem("phoneNumber")}</p>
                    </div>
                    <div class="data">
                      <h3>Password</h3>
                        <p>***********</p>
                    </div>
                    <div class="data">
                      <h3>Address</h3>
                        <p>{sessionStorage.getItem("address")}</p>
                    </div>
                    <div class="data">
                      <h3></h3>
                        <p onClick={handleLogOut} className='button_logout'>Log out</p>
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