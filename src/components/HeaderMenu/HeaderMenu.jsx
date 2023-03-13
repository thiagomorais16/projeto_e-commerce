import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"

const HeaderMenu = () => {
  return  (
  <header className='headerMenu'>
      <nav>
        <div className='logo'>
        <a href="#">  <img src="/src/assets/image_logo.png" alt="logo DNC" /> </a>
        </div>
        <div className='search-bar'>
          <form action="text">
            <input type="text" img src='../../assets/image_seach.png' placeholder="O que você está procurando?" />
          </form>
        </div>
        <div className='carrinho'>
          <a href="#"> <img src="/src/assets/image_carrinho.png" alt="carrinho" className='img2' /> </a>
        </div>
      </nav>
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
    </header>
    
  )
  
};

export default HeaderMenu;