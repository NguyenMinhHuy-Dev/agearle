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
import AllProducts from '../admin/AllProducts'
import Orders from '../admin/Orders'
import Users from '../admin/Users'
import AddProducts from '../admin/AddProduct'
import EditProducts from '../admin/EditProduct'
import AddUser from '../admin/AddUser'
import EditUser from '../admin/EditUser'
import { LimitedProducts } from '../admin/LimitedProduct'
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
                <Route path='dashboard/all-products' element={<AllProducts />} /> 
                <Route path='dashboard/add-product' element={<AddProducts />} /> 
                <Route path='dashboard/edit-product/:id' element={<EditProducts />} /> 
                <Route path='dashboard/orders' element={<Orders />} /> 
                <Route path='dashboard/users' element={<Users />} /> 
                <Route path='dashboard/add-user' element={<AddUser />} /> 
                <Route path='dashboard/edit-user/:id' element={<EditUser />} /> 
                <Route path='dashboard/limited-products' element={<LimitedProducts />}/>
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