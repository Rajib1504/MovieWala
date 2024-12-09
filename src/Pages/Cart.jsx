import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Cart = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/cart") {
      document.title = "web||cart";
    }
  }, [location]);
  return (
    <div>
      <NavBar></NavBar>
      cart
    </div>
  );
};

export default Cart;
