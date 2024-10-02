import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home' 
import Login from './pages/user/Login'
import Signup from './pages/user/Signup'
import Shop from './pages/user/Shop'


const LayoutUser = ({users, setLogged , logged, userDetails, products}) => {
  return (
    <div>          
        <Header logged = {logged} setLogged= {setLogged} userDetails = {userDetails}/>
        
        <Routes>
            <Route path = '/' element = {<Home logged={logged} userDetails= {userDetails}/>}/>
            <Route path = '/shop' element = {<Shop products={products}/>}/>
            <Route path = '/login' element = {<Login users = {users} setLogged = {setLogged}/>}/>
            <Route path = '/signup' element = {<Signup users = {users}/>}/>
            <Route path = '/*' element = {<Home logged={logged} userDetails= {userDetails}/>}/>
        </Routes>
    </div>
  )
}

export default LayoutUser