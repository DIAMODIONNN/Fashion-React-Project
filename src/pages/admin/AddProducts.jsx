import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProducts = ({setDeleted , deleted}) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });
  const navigate = useNavigate();
  const addNew = (e) => {
    e.preventDefault();

    if (true) {
      axios({
        method: "post",
        url: `http://localhost:3000/products`,
        data: product,
      }).then(_=>{
        setDeleted(!deleted)
        Swal.fire({
            position: "center",
            icon: "success",
            title: "The New Product Added Successfully",
            showConfirmButton: false,
            timer: 2000
          }).then(_=>navigate('/admin'));
      }
        
    )}
  };

  return (
    <div className="flex flex-col gap-[4em] justify-center items-center pt-8">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add New Products
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details about the new product.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={addNew}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              label="title"
              value={product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
            <Input
              label="price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <Input
              label="description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <Input
              label="category"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
            <Input
              label="image"
              type="url"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
            <Input
              label="rate"
              type="number"
              value={product.rating.rate}
              onChange={(e) =>
                setProduct({
                  ...product,
                  rating: { ...product.rating, rate: e.target.value },
                })
              }
            />
            <Input
              label="count"
              type="number"
              value={product.rating.count}
              onChange={(e) =>
                setProduct({
                  ...product,
                  rating: { ...product.rating, count: e.target.value },
                })
              }
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            sign up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddProducts;
