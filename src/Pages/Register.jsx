import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser,setUser} = use(AuthContext)
  const handleSignup = (e) => {
    e.preventDefault()
    console.log("Register btn clicked!");
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name,photo,email,password)
    createUser(email,password)
    .then((data)=>
    {
        //console.log(data.user)
        setUser(data.user)
    })
    .catch((error) => {
        alert(error.message)
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Register
        </h2>

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4 rounded-md"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4 rounded-md"
          required
        />
        <input
          name="photo"
          type="text"
          placeholder="Photo URL"
          className="border p-2 w-full mb-4 rounded-md"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded-md"
          required 
        />

        {/* {error && <p className="text-red-500 text-sm mb-2">{error}</p>} */}

        <button
          type="submit"
          className="w-full bg-green-600  text-white p-2 rounded-md hover:bg-green-700 transition cursor-pointer"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
