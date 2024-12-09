import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const User = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/users") {
      document.title = "web||users";
    }
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center items-center mt-4 gap-4">
        <Link to={"/add"} className="btn">
          Add Product
        </Link>
        <Link to={"/register"} className="btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default User;
