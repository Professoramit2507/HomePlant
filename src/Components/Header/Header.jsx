import React, { use } from "react";
import logoImg from "../../assets/img/images (2).jpg";
import userImg from "../../assets/img/user.png";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user,logOut } = use(AuthContext);
  const handleLogout = () => {
    console.log('LogOut Done')
    logOut()
    .then(()=>{
      alert("Logged Out Succesfully")
    })
    .catch((error)=>{
      alert(error.code)
    })
  }
  return (
    <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <div className="">{user && user.email}</div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <img className="w-10" src={logoImg} alt="" />
          <Link to="/home" className="btn btn-ghost text-xl">
            {" "}
            GreenNest
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        <img className="w-10 " src={userImg} alt="" />

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-primary px-8 text-[16px]"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8 text-[16px]">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
