
import React from 'react'
import './index.scss'
import Close from '../../assets/close.png'

const Pay = () => {
  return (
    <dialog id='dialogPay' className='dialog-pay' >
    <div className='dialog-pay__container'>
      <img src={Close} alt="close" className='dialog-pay__close'
      onClick={()=>
        document.getElementById('dialogPay').close()
        }/>
      <h2>Finalizar Compra:</h2>
      <label htmlFor="name">Digite seu nome:</label>
      <input type="text" id='name' placeholder='Nome Completo'/>

      <label htmlFor="name">Digite CPF:</label>
      <input type="text" id='CPF' placeholder='CPF'/>

      <label htmlFor="name">Endereço</label>
      <input type="text" id='adress' placeholder='Endereço'/>

      <label htmlFor="name">Forma de Pagamento</label>
      <select name="pay" id="pay">
        <option value="CC">Cartão de Crédito</option>
        <option value="CD">Cartão de Débito</option>
        <option value="BL">Boleto</option>
        <option value="PX">PIX</option>
      </select>

      <button>Confirmar Pedido</button>

      </div>
    </dialog>
  )
}

export default Pay