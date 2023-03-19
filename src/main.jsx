import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';
import { PRODUCT_MOCK } from './mock/mock';
const data = PRODUCT_MOCK
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
   {
     path: "/home",
     element: <Home data={PRODUCT_MOCK}/>,
   }, 
   {
     path: "/products/:productId",
     element: <Products data={PRODUCT_MOCK}/>,
   },
   {
     path: "/pay/:payId",
     element: <Pay data={PRODUCT_MOCK}/>,
   },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
