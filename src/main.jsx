import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


import {createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: '/home',
  //   Element: <App/>,
  // },
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
