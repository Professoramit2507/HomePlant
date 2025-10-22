import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const Login = () => {
    const {login} = use(AuthContext)
    const loginLocation = useLocation()
    const loginNavigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login btn clicked");
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password)
    login(email,password)
    .then((data)=> {
        console.log(data.user)
        loginNavigate(`${loginLocation.state?loginLocation.state:'/'}`)
    })
    .catch((error)=>{
        alert(error.code)
    })
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md w-80"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
            Login
          </h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
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
          <div className="mb-3 text-blue-500">
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* {error && <p className="text-red-500 text-sm mb-2">{error}</p>} */}

          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition cursor-pointer">
            Login
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/auth/register" className="text-red-600 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
