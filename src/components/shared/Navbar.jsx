import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userProfilePic from "../../assets/placeholder.jpg";
import React from "react";

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-500 text-white"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Best Shopping</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || userProfilePic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
