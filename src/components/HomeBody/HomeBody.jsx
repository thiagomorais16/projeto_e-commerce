import './index.scss';
import React from 'react';
import banner from '../../assets/image_principal.png';
import ProductCard from '../ProductCard/ProductCard';
export const HomeBody = (props) => {
    console.log(props)
  return (
    <div className='home__section'>
        <img className='home__img' src={banner}></img>

        <div className='home__div'>
            {props.productData.map((product) => 
            (<ProductCard key = {product.id} data={product}/>))}
        </div>
    </div>

  )
}
