import { FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { isDark, toggleTheme } = useContext(AuthContext);
  return (
    <div>
      <div className=" bg-[#f0f7fad7]">
        <div className="navbar p-0 justify-between lg:w-11/12 mx-auto px-2 items-center">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-36 p-2 z-[9999] shadow"
              >
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                {
                  <li>
                    <NavLink to={"/users"}>Users</NavLink>
                  </li>
                }
                {
                  <li>
                    <NavLink to={"/cart"}>Cart</NavLink>
                  </li>
                }
              </ul>
            </div>
            <div className="flex gap-1 font-bold  items-center">
              <img
                className="w-20 hidden sm:block"
                src="https://i.ibb.co/5xZDc1k/fotor-2024111812459-removebg-preview.png"
                alt=""
              />
              <h2 className="text-xl sm-text-2xl">Digital world</h2>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal gap-2 px-1">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              {
                <li>
                  <NavLink to={"/users"}>Users</NavLink>
                </li>
              }
              {
                <li>
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
              }
            </ul>
          </div>
          <div>
            <div className=" mx-2 flex gap-2 justify-between items-center">
              <img src="https://i.ibb.co/5kvRVMX/user.png" alt="" />
            </div>
            {/* <button className="btn">Logout</button> */}

            <Link to={"/auth/login"} className="btn">
              Login
            </Link>
            <button onClick={toggleTheme}>
              {isDark ? (
                <MdSunny className="text-3xl" />
              ) : (
                <FaMoon className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
