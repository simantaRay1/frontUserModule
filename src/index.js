import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";


// axios.interceptors.request.use((request) => {
//   console.log(request, "from index req");

//   return request;
  
// },
// (error)=>{
//   return Promise.reject(error);
// }
// );

// axios.interceptors.response.use((response) => {
//   console.log(response, "from index res");
//   // return response
// },
// (error)=>{
//   return Promise.reject(error);
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
