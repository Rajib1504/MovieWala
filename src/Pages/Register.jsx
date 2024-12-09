import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phtoUrl = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, phtoUrl, password);
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain capital,small laters,a number and min length 6 ",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success",
          text: `User has created with the name of ${name} `,
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMe = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMe,
        });
      });
  };
  return (
    <>
      <div className="flex items-center pb-4 justify-center pt-2 sm:pt-4 dark:bg-slate-900 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white  dark:bg-slate-800 dark:text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-800 mb-4">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoURL"
                name="photoURL"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter photo URL"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
          {/* Google Login Button */}
          <button className="w-full px-4 py-2 mt-4 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none">
            <div
              // onClick={handelGoogle}
              className="flex items-center gap-2 justify-center"
            >
              <img
                className="w-6"
                src="https://i.ibb.co/mSSztJP/google-logo-9808.png"
                alt=""
              />
              <p className="dark:text-blue-500">Google Login</p>
            </div>
          </button>
          {/* Link to Login Page */}
          <p className="mt-4 text-sm text-center dark:text-white text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
