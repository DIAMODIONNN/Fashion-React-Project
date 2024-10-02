import React from 'react'
import AdminHeader from './components/AdminHeader'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import ViewProduct from './pages/admin/ViewProduct'
import NotFound from './pages/admin/NotFound'
import AddProducts from './pages/admin/AddProducts'
import EditProduct from './pages/admin/EditProduct'

const LayoutAdmin = ({products , deleted , setDeleted}) => {
  return (
    <div>
      <AdminHeader />
      <Routes>
          <Route path = '/' element = {<Dashboard products={products} deleted={deleted} setDeleted={setDeleted}/>}/>
          <Route path = '/view/:productId' element = {<ViewProduct products={products}/>}/>
          <Route path = '/edit/:productId' element = {<EditProduct products={products}/>}/>
          <Route path = '/add' element = {<AddProducts products={products} deleted={deleted} setDeleted={setDeleted}/>}/>
          <Route path = '/NotFound' element = {<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default LayoutAdmin