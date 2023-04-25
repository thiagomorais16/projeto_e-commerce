import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom';


const LastModal = () => {
    
  return (
    <div className="modal">
        <div className="lastModal">
            
            <form className='form'>
                <h2>Finalizar Compra</h2>
                <label>Digite seu nome:</label>
                <input type='text' placeholder='Nome completo'/>
                <label>Digite seu CPF:</label>
                <input type='number' placeholder='CPF'/>
                <label>Endereço:</label>
                <input type='password' placeholder='Endereço'/>
                <label>Forma de Pagamento:</label>
                <input type='password' placeholder='Pagamento'/>
                <button><Link to={'/home'}>Confirmar Pedido</Link></button>
            </form>
        </div>
    
    
    </div>
  )
}

export default LastModal