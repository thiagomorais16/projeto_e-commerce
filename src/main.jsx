import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './views/Login/login'
import Home from './views/Home/home'

import {createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
     path: "/home",
     Element: <Home/>,
   }, 
  // {
  //   path: '/products',
  //   Element: <App/>,
  // },
  // {
  //   path: '/pay',
  //   Element: <App/>,
  // },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
