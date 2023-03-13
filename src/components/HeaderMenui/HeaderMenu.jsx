import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"
const HeaderMenu = () => {
  return  (
  <header className='headerMenu'>
      <div id='cima'>
        <div id='menu2'>
          <img src="/src/assets/image_logo.png" alt="logo da DNC" />
        </div>
        <div id="divBusca">
          <input type="text" id="txtBusca" placeholder="O que você está procurando?" />
          <img src="/src/assets/image_seach.png" id="Busca" alt="Buscar" />
          <img src="/src/assets/image_carrinho.png" alt="carrinho de compra" />
        </div>
      </div>
<div id='baixo'>
  <img src="/src/assets/image_logo.png" alt="logo da DNC"/>
</div>


</header>
  )
  
};

export default HeaderMenu;