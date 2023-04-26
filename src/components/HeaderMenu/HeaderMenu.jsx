import React from "react";
import dncLogo from "../../assets/image_logo.png";
import carrinho from "../../assets/image_carrinho.png";
import lupa from "../../assets/image_seach.png";
import "./index.scss";

const HeaderMenu = () => {
  return (
    <header className="headerMenu">
      <div id="cima">
        <nav>
          <div id="logo">
            <img id="logo1" src={dncLogo} alt="logo DNC" />
          </div>
          <div className="search-bar">
            <label htmlFor="search">
              <img src={lupa} alt="ícone de pesquisa" />
              <input type="text" placeholder="O que você está procurando?" />
            </label>
          </div>
          <div id="carrinho">
            <img
              src={carrinho}
              alt="carrinho"
              className="img2"
              onClick={() => document.getElementById("dialogPay").showModal()}
            />
          </div>
        </nav>
      </div>
      <div id="baixo">
        <main className="menu">
          <ul className="animated-list">
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
  );
};

export default HeaderMenu;
