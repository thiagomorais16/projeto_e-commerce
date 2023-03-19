
import './index.scss'

import { Link } from 'react-router-dom'
import Products from '../Products/Products';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = ({data}) => {
  console.log(data);
  return (
    
    <div className='home'>
     <HeaderMenu/>

     <div className="home__products">
      {
        data.map(product => (
        <ProductCard key={product.id} data={product}/>
        ))}
        
     </div>
     
    </div>
  );
};

export default Home;