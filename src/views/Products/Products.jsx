import React from 'react'
import './index.scss'
import { PRODUCT_MOCK } from '../../mock/mock';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../../components/Product-Detail/ProductDetail';
import { useState } from 'react';
import HeaderMenu from "../../../HeaderMenu";
import { useParams } from 'react-router-dom';


const Products = ({data}) => {
  const [modal, setModal] = useState(false);
  const {productId} = useParams()
  const selectedProduct = data.find((product) => product.id == productId);
  return (
      <section className='product'>
      <HeaderMenu />
      <ProductDetail data = {selectedProduct}/>
      <Footer/>
      </section>
      
  )
}

export default Products