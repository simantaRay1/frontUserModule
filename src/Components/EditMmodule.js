import React, { useState } from "react";
import axios from "axios";

export default function EditMmodule({ setViewModal, user , refreshToken}) {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [role, setRoles] = useState();
  const token = window.localStorage.getItem("jwt");
  const handleSave = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
    };
    //edit
    axios
      .put(`${process.env.REACT_APP_BASE_LINK}/user/${user._id}`, data, {
        headers: {
          token: `Bearer ${token}`,
        },
      })
      .then((response) => {
       // console.log(response.data.status);
        setViewModal(false);
      })
      .catch((err) => {
        if (err.response.status == "400") {
          console.log("refersh");
          refreshToken();
        }
      });
    //add roles
    if(role)
    axios
      .put(
        `${process.env.REACT_APP_BASE_LINK}/user/addrole/${role}/${user._id}`,
        {},
        {
          headers: {
            token: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
      //  console.log(response.data);
        setViewModal(false);
      })
      .catch((err) => {
        if (err.response.status == "400") {
          console.log("refersh");
          refreshToken();
        }
      });
  };

  return (
    <div className="absolute w-auto h-full top-0 bg-black/[.30] outline-none overflow-x-hidden overflow-y-auto">
      <div>
        <div className=" w-[100vw] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-md w-full space-y-8 bg-white p-10">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://cdn.dribbble.com/users/434375/screenshots/16798272/media/eadadc738a83c444fea86fca0b385051.jpg?compress=1&resize=1200x900&vertical=top"
                alt="Workflow"
              ></img>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true"></input>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="name" className="sr-only">
                    User name
                  </label>
                  <input
                    value={username}
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="User name"
                    onChange={(event) => setUsername(event.target.value)}
                  ></input>
                </div>

                <div>
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                {/* <RoleDropDown 
              className="border-2 p-2 rounded-sm"
              placeholder ="Select a role"
              value=""
              options={[
                "Admin",
                "HR",
                "Team Leader",
                "Team Member"
              ]} /> */}
                <div className="py-3 px-2 border-2 text-gray-500 text-sm rounded-sm">
                  <select
                    defaultValue={"notvalid"}
                    // onChange={this.handleChange}
                    onChange={(event) => setRoles(event.target.value)}
                  >
                    <option value="notvalid">Select a role</option>
                    <option value="0">Admin</option>
                    <option value="1">HR</option>
                    <option value="2">Project Manager</option>
                    <option value="3">Team Leader</option>
                    <option value="4">Team Member</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  type="submit"
                  className="mr-4 relative justify-center py-2 px-10 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                  onClick={() => {
                    setViewModal(false);
                  }}
                >
                  Back
                </button>

                <button
                  type="submit"
                  className=" relative  justify-center py-2 px-10 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
