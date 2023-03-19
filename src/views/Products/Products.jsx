import React from 'react'
import './index.scss'
import { PRODUCT_MOCK } from '../../mock/mock';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Product-Detail/ProductDetail';

const Products = ({data}) => {
  const {productId} = useParams()
  const selectedProduct = data.find((product) => product.id == productId);
  return (
      <section className='product'>
    <HeaderMenu/>
    <ProductDetail data = {selectedProduct}/>
    </section>
  );
};

export default Products;