import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
  console.log(data)
  return <div className='home__card'>
            <img src={data.imgPath} className='home_img_product'></img>
            <h5 className='home__h5'>{data.title}</h5>
            <button className='home_button'>
              <Link to = {`/products/${data.id}`} className='home__router'>Ver Mais</Link>
            </button>

   
  </div>
};

export default ProductCard;