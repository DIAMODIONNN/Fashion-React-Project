import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewProduct = () => {
    
    const navigate = useNavigate();
     const {productId} = useParams();
     const [productDetails , setProductDetails] = useState(null);

     console.log(productDetails)
     const getProduct =()=>{
     axios({
        method : 'get',
        url : `http://localhost:3000/products/${productId}`
     }).then(({data}) => {
        if(data.id){setProductDetails(data)}else{
            throw Error("wrong")
        }
    })
     .catch((e)=> navigate('/admin/NotFound'));
    }
     useEffect(()=>{
        getProduct()   
     }, [])

    return (
    <div className='text-center m-9'>
        <h1>ViewProduct</h1>
        <h1>{productDetails?.title}</h1>
        <Button onClick={()=>navigate(-1)} color='amber'>BACK</Button>
    </div>
  )
}

export default ViewProduct