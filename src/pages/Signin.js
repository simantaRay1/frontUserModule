import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;

export default function Signup() {
  const [userName, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: userName,
      password: password,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_LINK}/user/login`, data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("jwt", response.data.acessToken);
        if (response.data) navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.error("Wrong UserName or Password");
        }
      });
  };
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-auto">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn.dribbble.com/users/434375/screenshots/16798272/media/eadadc738a83c444fea86fca0b385051.jpg?compress=1&resize=1200x900&vertical=top"
              alt="Workflow"
            ></img>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true"></input>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  User name
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User name"
                  onChange={(event) => SetUserName(event.target.value)}
                ></input>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(event) => SetPassword(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                ></input>
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {" "}
                  Remember me{" "}
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign in
              </button>
              <Link to="/signup">
                <p className="font-medium text-indigo-600 hover:text-indigo-500 mt-4">
                  Im a new user!
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
