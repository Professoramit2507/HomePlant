
import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Login = () => {
  const { login, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location.state?.from || "/");
      })
      .catch((error) => setError(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    setError("");

    login(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        navigate(location.state?.from || "/");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>

        <input name="email" type="email" placeholder="Email" className="border p-2 w-full mb-4 rounded-md" required />

        <div className="relative mb-4">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 w-full rounded-md pr-10"
            required
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <Link to="/forgot-password" className="text-blue-500 mb-3 block">Forgot password?</Link>

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition cursor-pointer">
          Login
        </button>

        <button
          type="button"
          onClick={signInGoogle}
          className="w-full bg-black text-white p-2 mt-5 rounded-md transition cursor-pointer flex items-center justify-center gap-4"
        >
          <FaGoogle /> Sign in with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-red-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
