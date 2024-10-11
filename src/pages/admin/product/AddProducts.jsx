// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Input,
//   Button,
//   Typography,
// } from "@material-tailwind/react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const AddProducts = ({setDeleted , deleted}) => {
//   const [product, setProduct] = useState({
//     title: "",
//     price: "",
//     description: "",
//     category: "",
//     image: "",
//     rating: {
//       rate: "",
//       count: "",
//     },
//   });
//   const navigate = useNavigate();
//   const addNew = (e) => {
//     e.preventDefault();

//     if (true) {
//       axios({
//         method: "post",
//         url: `http://localhost:3000/products`,
//         data: product,
//       }).then(_=>{
//         setDeleted(!deleted)
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "The New Product Added Successfully",
//             showConfirmButton: false,
//             timer: 2000
//           }).then(_=>navigate('/admin/products'));
//       }
//     )}
//   };

//   return (
//     <div className="flex flex-col gap-[4em] justify-center items-center pt-8">
//       <Card color="transparent" shadow={false}>
//         <Typography variant="h4" color="blue-gray">
//           Add New Products
//         </Typography>
//         <Typography color="gray" className="mt-1 font-normal">
//           Nice to meet you! Enter your details about the new product.
//         </Typography>
//         <form
//           className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
//           onSubmit={addNew}
//         >
//           <div className="mb-1 flex flex-col gap-6">
//             <Input
//               label="title"
//               className="bg-white"
//               value={product.title}
//               onChange={(e) =>
//                 setProduct({ ...product, title: e.target.value })
//               }
//             />
//             <Input
//               label="price"
//               className="bg-white"
//               type="number"
//               value={product.price}
//               onChange={(e) =>
//                 setProduct({ ...product, price: e.target.value })
//               }
//             />
//             <Input
//               label="description"
//               className="bg-white"
//               value={product.description}
//               onChange={(e) =>
//                 setProduct({ ...product, description: e.target.value })
//               }
//             />
//             <Input
//               label="category"
//               className="bg-white"
//               value={product.category}
//               onChange={(e) =>
//                 setProduct({ ...product, category: e.target.value })
//               }
//             />
//             <Input
//               label="image"
//               className="bg-white"
//               type="url"
//               value={product.image}
//               onChange={(e) =>
//                 setProduct({ ...product, image: e.target.value })
//               }
//             />
//             <Input
//               label="rate"
//               type="number"
//               className="bg-white"
//               value={product.rating.rate}
//               onChange={(e) =>
//                 setProduct({
//                   ...product,
//                   rating: { ...product.rating, rate: e.target.value },
//                 })
//               }
//             />
//             <Input
//               label="count"
//               className="bg-white"
//               type="number"
//               value={product.rating.count}
//               onChange={(e) =>
//                 setProduct({
//                   ...product,
//                   rating: { ...product.rating, count: e.target.value },
//                 })
//               }
//             />
//           </div>
//           <div className='flex justify-center items-center gap-5'>
//             <Button className="mt-6" fullWidth type="submit">
//              Confirm
//             </Button>
//             <Button onClick={() => navigate(-1)} color="cyan" className="mt-6">
//             BACK
//           </Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AddProducts;








import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = ({ setDeleted, deleted }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "user",
    gender: "",
    img: "",
  });

  const navigate = useNavigate();

  const addNewUser = (e) => {
    e.preventDefault();

    if (user.name && user.email && user.password && user.gender) {
      const newUser = {
        id: Date.now().toString(),
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        gender: user.gender,
        img: user.img || "",
      };

      axios.post("http://localhost:3000/users", newUser)
        .then(() => {
          setDeleted(!deleted);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "The New User Added Successfully",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => navigate("/admin/users"));
        })
    //     .catch(() => {
    //       Swal.fire({
    //         title: "Error",
    //         text: "There was an error adding the user.",
    //         icon: "error",
    //       });
    //     });
    // } else {
    //   Swal.fire({
    //     title: "Error",
    //     text: "Please fill in all required fields.",
    //     icon: "error",
    //   });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-12 justify-center items-center pt-8 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 min-h-screen">
      <Card className="w-[90%] md:w-96 p-8 shadow-lg shadow-indigo-500/50">
        <Typography variant="h4" color="blue-gray" className="text-center mb-4">
          Add New User 👤
        </Typography>
        <Typography color="gray" className="mb-6 text-center">
          Nice to meet you! Enter the details of the new user below.
        </Typography>
        <form className="flex flex-col gap-6" onSubmit={addNewUser}>
          <Input
            label="Name"
            className="bg-white"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            className="bg-white"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            className="bg-white"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Input
            label="Role"
            className="bg-white"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
          <Input
            label="Gender"
            className="bg-white"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          />
          <Input
            label="Image URL"
            type="url"
            className="bg-white"
            name="img"
            value={user.img}
            onChange={handleChange}
          />
          <div className='flex justify-center items-center gap-5'>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors mt-6" fullWidth type="submit">
              Confirm ✅
            </Button>
            <Button onClick={() => navigate(-1)} color="cyan" className="mt-6">
              Back 🔙
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
