import React from 'react'
import { PRODUCT_MOCK } from './mock/mock';

import './index.scss'
import Products from '../Products/Products';
import { Link } from 'react-router-dom'

const Home = () => {
  const data = PRODUCT_MOCK

  return (
    <section className='home'>
    <Header />
    <div className='home'>
        <h1>home</h1>
        <button>
            <Link to={"/products/1"}>Produto</Link>
        </button>
        
    

    </div>
    </section>
  )
}

export default Home