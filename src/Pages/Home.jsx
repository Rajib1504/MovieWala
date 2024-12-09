import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "web||home";
    }
  }, [location]);
  return <div>home</div>;
};

export default Home;
