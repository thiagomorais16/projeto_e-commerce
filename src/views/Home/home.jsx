import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Products from '../Products/Products';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { HomeBody } from '../../components/HomeBody/HomeBody';

const Home = (props) => {

  return (
    <section className='home'>
     <HeaderMenu/>
     <HomeBody productData={props.productData}/>
  
    </section>
  )
}

export default Home