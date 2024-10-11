
// import React, { useState } from "react";
// import { PencilIcon } from "@heroicons/react/24/solid";
// import {
//   Card,
//   Typography,
//   Button,
//   CardBody,
//   Tooltip,
//   IconButton,
// } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";

// const TABLE_HEAD = ["Username", "Role", "Operators"];

// const Users = ({ users, deleted, setDeleted }) => {
//   const toggle = ({ role, id }) => {
//     Swal.fire({
//       title: `${role === "admin" ? "Make it a Regular User?" : "Make it Admin?"}`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Role Changed",
//           icon: "success",
//         });
//         axios({
//           method: 'patch',
//           url: `http://localhost:3000/users/${id}`,
//           data: {
//             role: role === "admin" ? "user" : "admin",
//           },
//         }).then(() => setDeleted(!deleted));
//       }
//     });
//   };

//   const deleteUser = ({ name, id }) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: `Deleting ${name}...`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "Deleted!",
//           text: "User has been deleted.",
//           icon: "success",
//         });
//         axios({
//           method: "delete",
//           url: `http://localhost:3000/users/${id}`,
//         }).then(() => setDeleted(!deleted));
//       }
//     });
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-500 py-10">
//       <div className="flex flex-col items-center bg-white max-w-7xl mx-auto p-8 shadow-lg rounded-lg">
//         <h1 className="mt-3 mb-[1.5em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500 text-5xl font-extrabold animate-pulse">
//           Welcome To Users
//         </h1>

//         <Link to={`/admin/adduser`}>
//           <Button variant="gradient" color="blue" className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//             Add New User
//           </Button>
//         </Link>

//         <Card className="h-full w-full bg-[#bae6fd] rounded-lg shadow-md">
//           <CardBody>
//             <table className="table-auto w-full mx-auto text-left">
//               <thead>
//                 <tr>
//                   {TABLE_HEAD.map((head) => (
//                     <th key={head} className="bg-[#7dd3fc] p-4 text-center">
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-extrabold leading-5 opacity-70"
//                       >
//                         {head}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map(({ id, name, role }, index) => (
//                   <tr key={index} className="p-4 hover:bg-[#cce7ff]">
//                     <td className="py-4">
//                       <div className="flex items-center gap-3">
//                         <Typography
//                           variant="small"
//                           color="blue-gray"
//                           className="font-bold px-10"
//                         >
//                           {name}
//                         </Typography>
//                       </div>
//                     </td>
//                     <td className="py-4">
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal mx-4"
//                       >
//                         {role}
//                       </Typography>
//                     </td>
//                     <td className="py-4 justify-center items-center flex">
//                       <div className="w-max flex gap-4">
//                         <Link to={`/admin/edituser/${id}`}>
//                           <Tooltip content="Edit User">
//                             <IconButton variant="text">
//                               <PencilIcon className="h-4 w-4" />
//                             </IconButton>
//                           </Tooltip>
//                         </Link>
//                         <Link to={`/admin/viewuser/${id}`}>
//                           <Button
//                             className="bg-indigo-500 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//                           >
//                             View
//                           </Button>
//                         </Link>
//                         {role === "admin" ? (
//                           <Button
//                             color="cyan"
//                             className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//                             onClick={() => toggle({ role, id })}
//                           >
//                             Make it User
//                           </Button>
//                         ) : (
//                           <Button
//                             color="deep-purple"
//                             className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//                             onClick={() => toggle({ role, id })}
//                           >
//                             Make it Admin
//                           </Button>
//                         )}
//                         <Button
//                           color="blue"
//                           className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//                           onClick={() => deleteUser({ name, id })}
//                         >
//                           DELETE
//                         </Button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Users;




import React, { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Username", "Role", "Operators"];

const Users = ({ users, deleted, setDeleted }) => {
  const [firstAdmin, setFirstAdmin] = useState(null);

  useEffect(() => {
    // الحصول على أول أدمن
    const admin = users.find(user => user.role === "admin");
    setFirstAdmin(admin); // تخزين أول أدمن
  }, [users]);

  const toggle = ({ role, id }) => {
    if (firstAdmin && id === firstAdmin.id && role === "admin") {
      Swal.fire({
        title: "Cannot Change First Admin Role",
        text: "The first admin's role cannot be changed.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: `${role === "admin" ? "Make it a Regular User?" : "Make it Admin?"}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Role Changed",
          icon: "success",
        });
        axios({
          method: 'patch',
          url: `http://localhost:3000/users/${id}`,
          data: {
            role: role === "admin" ? "user" : "admin",
          },
        }).then(() => setDeleted(!deleted));
      }
    });
  };

  const deleteUser = ({ name, id }) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Deleting ${name}...`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
        axios({
          method: "delete",
          url: `http://localhost:3000/users/${id}`,
        }).then(() => setDeleted(!deleted));
      }
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-500 py-10">
      <div className="flex flex-col items-center bg-white max-w-7xl mx-auto p-8 shadow-lg rounded-lg">
        <h1 className="mt-3 mb-[1.5em] bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500 text-5xl font-extrabold animate-pulse">
          Welcome To Users
        </h1>

        <Link to={`/admin/adduser`}>
          <Button variant="gradient" color="blue" className="mb-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Add New User
          </Button>
        </Link>

        <Card className="h-full w-full bg-[#bae6fd] rounded-lg shadow-md">
          <CardBody>
            <table className="table-auto w-full mx-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="bg-[#7dd3fc] p-4 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-extrabold leading-5 opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(({ id, name, role }, index) => (
                  <tr key={index} className="p-4 hover:bg-[#cce7ff]">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold px-10"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className="py-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal mx-4"
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className="py-4 justify-center items-center flex">
                      <div className="w-max flex gap-4">
                        <Link to={`/admin/edituser/${id}`}>
                          <Tooltip content="Edit User">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </Link>
                        <Link to={`/admin/viewuser/${id}`}>
                          <Button
                            className="bg-indigo-500 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                          >
                            View
                          </Button>
                        </Link>
                        {role === "admin" && id === firstAdmin?.id ? (
                          <Button
                            color="cyan"
                            disabled
                            className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                          >
                            First Admin
                          </Button>
                        ) : role === "admin" ? (
                          <Button
                            color="cyan"
                            className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            onClick={() => toggle({ role, id })}
                          >
                            Make it User
                          </Button>
                        ) : (
                          <Button
                            color="deep-purple"
                            className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            onClick={() => toggle({ role, id })}
                          >
                            Make it Admin
                          </Button>
                        )}
                        <Button
                          color="blue"
                          className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                          onClick={() => deleteUser({ name, id })}
                        >
                          DELETE
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Users;
