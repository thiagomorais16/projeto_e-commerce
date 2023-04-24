import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header';


  const Login = () => {
    return (
      <div>
        <Header />
        <h1>
          Acesse com seu login ou cadastre-se!
        </h1>
        <h2>você pode entrar com o seu CPF</h2>

        <div className="App">
          <form>
            <label>
              Digite seu CPF:
            </label><br></br>
            <input type="text"></input><br></br><br></br>
            <label>
              Senha:
            </label><br></br>
            <input type="password"></input><br></br>
            <button><Link to={`/home`}> Entrar</Link></button>
          </form>
        </div>

      </div>
    )
  }

  export default Login