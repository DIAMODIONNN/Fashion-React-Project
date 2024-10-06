import React from "react";
import AdminHeader from "./components/AdminHeader";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import ViewProduct from "./pages/admin/ViewProduct";
import NotFound from "./pages/admin/NotFound";
import AddProducts from "./pages/admin/AddProducts";
import EditProduct from "./pages/admin/EditProduct";
import { Button } from "@material-tailwind/react";
import Products from "./pages/admin/Products";
import Users from "./pages/admin/Users";

const LayoutAdmin = ({ users ,setUsers , products, user,product, setProducts, deleted, setDeleted }) => {
  

  return (
    <div>
      <AdminHeader />
      <ul className="flex justify-evenly items-center p-2 w-full bg-gray-100 text-2xl font-serif">
        <li>
          <Link to={`/admin`}><Button variant="text">Dashboard</Button></Link>
        
        </li>
        <li>
        <Link to={`/admin/users`}><Button variant="text">Users</Button></Link>
        
        </li>
        <li>
        <Link to={`/admin/products`}><Button variant="text">Products</Button></Link>
        </li>
      </ul>
      <Routes>
          <Route path= "/" element={<Dashboard user ={user} users= {users}  product={product} products={products} setProducts={setProducts}/>}/>
          <Route path= "/products" element={<Products products={products} deleted={deleted} setDeleted={setDeleted}/>}/>
          <Route path = "/view/:productId" element = {<ViewProduct products={products}/>}/>
          <Route path = "/edit/:productId" element = {<EditProduct products={products}/>}/>
          <Route path = "/add" element = {<AddProducts products={products} deleted={deleted} setDeleted={setDeleted}/>}/>
          <Route path = "/users" element = {<Users products={products} deleted={deleted} setDeleted={setDeleted}/>}/>
          <Route path="/NotFound" element={<NotFound />} />

      </Routes>
    </div>
  );
};

export default LayoutAdmin;
