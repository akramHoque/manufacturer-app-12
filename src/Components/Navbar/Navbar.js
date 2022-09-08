import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Components/Shared/Loading/Loading";
import { signOut } from "firebase/auth";


const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const navbarItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/myPortfolio">My Portfolio</NavLink>
      </li>
      <li>
              <NavLink to="/users">All Users</NavLink>
        </li>
      {user && (
        <li>
          <NavLink to="/dashboard/myProfile">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            className="btn rounded-sm border-0 bg-[#EE5A24] text-gray-200 mt-2 lg:mt-0"
          >
          <span className="pr-1 ">({user.displayName})</span>
            Sign Out
          </button>
        </>
      ) : (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#1B1464] py-3 text-white sticky top-0 z-50 px-4 lg:px-12">
      <label
        htmlFor="dashboard-sidebar"
        className="btn  mr-2 lg:hidden"
      >
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
      </label>
      <div className="navbar-start">
        <NavLink to="/" className="">
         <span className="font-bold lg:text-3xl text-xl uppercase text-[#fff]">FISH HUNT</span>
        </NavLink>
      </div>
      <div className="navbar-env ml-auto">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal lg:text-white text-[#1B1464]  gap-2">{navbarItems}</ul>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content lg:text-white text-[#1B1464] bg-white mt-3 p-2 shadow font-bold rounded-sm w-52"
          >
            {navbarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;