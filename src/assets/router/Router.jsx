import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import User from "../../Components/User";
import Cart from "../../Pages/Cart";
import AddProduct from "../../Components/AddProduct";
import Layout from "../../Pages/Layout";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <User></User>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {},
    ],
  },
]);
export default router;
