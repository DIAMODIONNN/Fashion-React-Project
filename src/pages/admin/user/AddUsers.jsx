import React, { useState } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddNewUser = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [gender, setGender] = useState("Male");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all required fields.",
        icon: "error",
      });
      return;
    }

    const newUser = {
      // id: Date.now().toString(), // Generate a simple unique ID
      name,
      email,
      password,
      role,
      gender,
      img,
    };

    axios
      .post("http://localhost:3000/users", newUser)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "User added successfully.",
          icon: "success",
        });
        setUsers((prevUsers) => [...prevUsers, newUser]);
        navigate("/admin/users");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "There was an error adding the user.",
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-500 py-10">
      <div className="flex flex-col items-center bg-white max-w-7xl mx-auto p-8 shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500 mb-6">
          Add New User
        </h1>

        <Card className="w-full bg-[#bae6fd] shadow-md rounded-lg">
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="role">
                  Role:
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="gender">
                  Gender:
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="img">
                  Image URL:
                </label>
                <input
                  type="text"
                  id="img"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <Button
                type="submit"
                variant="gradient"
                color="blue"
                className="w-full mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Add User
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddNewUser;
