import React, { useContext, useState } from "react";
import logoImg from "../../assets/img/images (2).jpg";
import userImg from "../../assets/img/user.png";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out Successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        toast.error(`Error: ${error.code}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <nav className="bg-base-100 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/home" className="flex items-center space-x-2">
                <img className="w-10 h-10" src={logoImg} alt="Logo" />
                <span className="font-bold text-xl text-green-700">
                  GreenNest
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <Link to="/home" className="btn btn-success px-4 text-white">
                Home
              </Link>
              <Link to="/plants" className="btn btn-info px-4 text-white">
                Plants
              </Link>
              <Link to="/profile" className="btn btn-accent px-4 text-white">
                My Profile
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full"
                src={userImg}
                alt="User"
              />

              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-primary px-4 text-sm"
                >
                  LogOut
                </button>
              ) : (
                <Link to="/auth/login" className="btn btn-primary px-4 text-sm">
                  Login
                </Link>
              )}

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/home"
              className="block px-3 py-2 rounded-md text-base font-medium bg-green-100 hover:bg-green-200"
            >
              Home
            </Link>
            <Link
              to="/plants"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-100 hover:bg-blue-200"
            >
              Plants
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium bg-purple-100 hover:bg-purple-200"
            >
              My Profile
            </Link>
          </div>
        )}
      </nav>

      <ToastContainer />
    </>
  );
};

export default Header;
