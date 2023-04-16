import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import About from '../pages/About'
import ForgotPassword from '../pages/ForgotPassword'
import User from '../pages/User'
import Privacy from '../pages/Privacy'
import { ProtectedRoute } from './ProtectedRoute'
import { Dashboard } from '../admin/Dashboard'
const Routers = () => {
    return ( 
        <Routes >
            <Route path ='/' element={<Navigate to = 'home'/>}></Route>
            <Route path = '/home' element = {<Home/>}/>  
            <Route path = '/shop' element = {<Shop/>}/>  
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/cart' element = {<Cart/>}/>  
            {/* <Route path = '/checkout' element = {
                <ProtectedRoute>
                    <Checkout/>
                </ProtectedRoute>
            }/>   */}

            <Route path='/*' element={<ProtectedRoute />}>
                <Route path='checkout' element={<Checkout />} />
                <Route path='dashboard' element={<Dashboard />} />
            </Route>

            <Route path = '/shop/:id' element = {<ProductDetails/>}/>  
            <Route path = '/login' element = {<Login/>}/>  
            <Route path = '/signup' element = {<Signup/>}/> 
            <Route path = '/forgot' element = {<ForgotPassword/>}/> 
            <Route path = '/privacy' element = {<Privacy/>}/>
            <Route path = '/user' element = {<User/>}/>
        </Routes>
    )
};

export default Routers;