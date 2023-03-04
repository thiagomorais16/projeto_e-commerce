import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Products from './views/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
     path: "/home",
     element: <Home/>,
   }, 
   {
     path: "/products/:productId",
     element: <Products/>,
   },
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
