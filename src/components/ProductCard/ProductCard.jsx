import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
  console.log(data.title);
  return (
    <div className='home_card'>
    <img src={data.imgPath} alt="model" />
    <div className='home__card-description'>
      <p>{data.title}</p>
      <button>
        <Link to={`/products/${data.id}`}>Comprar</Link>
      </button>
    </div>
    </div>
  );
};

export default ProductCard;