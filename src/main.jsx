import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, RouterProvider, } from "react-router-dom"; 
import Login from './views/Login/login';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';
import { PRODUCT_MOCK } from './mock/mock';
import Home from './views/Home/home';
const data = PRODUCT_MOCK

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
   {
     path: "/home",
     element: <Home productData = {data}/>,
   }, 
   {
     path: "/products/:productId",
     element: <Products data = {data}/>,
   },
   {
     path: "/pay:payId",
     element: <Pay data = {data}/>,
   },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
