import React from "react";

export default function EditMmodule({setViewModal}) {
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
          <form className="mt-8 space-y-6" >
            <input type="hidden" name="remember" value="true"></input>
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label for="email-address" className="sr-only">
                  User name
                </label>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User name"
                //   onChange={event => SetUserName(event.target.value)}
                ></input>
              </div>
            
              <div>
                <label for="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  autocomplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                //   onChange={event => SetPassword(event.target.value)}
                ></input>
              </div>
              
            </div>

            <div className="flex items-center">
            <button
                type="submit"
                className="mr-4 relative justify-center py-2 px-10 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                onClick={()=>{setViewModal(false)}}
              >
                Back
              </button>

              <button
                type="submit"
                className=" relative  justify-center py-2 px-10 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                
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
