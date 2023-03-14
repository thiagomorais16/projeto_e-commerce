import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"

const HeaderMenu = () => {
  return  (
  <header className='headerMenu'>
    <div id='cima'>
      <nav>
        <div id='logo'>
        <img id='logo1' src="/src/assets/image_logo.png" alt="logo DNC" /> 
        </div>
        <div className='search-bar'>
          <label htmlFor="search">
            <img src="/src/assets/image_seach.png" alt="ícone de pesquisa" />
            <input type="text" placeholder='O que você está procurando?' />
          </label>
        </div>
        <div id='carrinho'>
          <a href="#"> <img src="/src/assets/image_carrinho.png" alt="carrinho" className='img2' /> </a>
        </div>
      </nav>
    </div>
    <div id='baixo'>

      <main className='menu'>
        <ul className='animated-list'>
          <li>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesa Gamer</li>
          <li>Promoções</li>
          <li>Atendimento</li>
        </ul>
      </main>
    </div>
    </header>
    
  )
  
};

export default HeaderMenu;