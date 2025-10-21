import React from "react";
import logoImg from '../../assets/img/images (2).jpg'
import userImg from '../../assets/img/user.png'
import { Link } from "react-router";

const Header = () => {
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
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
               <Link to='/plants'>Plants</Link>
            </li>
            <li>
              <Link to='/profile'>My Profile</Link>
            </li>
          </ul>
        </div>
            <div className="flex">
                <img className="w-10" src={logoImg}  alt="" />
                    <Link to='/home' className="btn btn-ghost text-xl"> GreenNest</Link>
            </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
             <Link to='/plants'>Plants</Link>
            </li>
            <li>
              <Link to='/profile'>My Profile</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <img className="w-8" src={userImg} alt="" />
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Header;
