import React from "react";
import "./index.scss"


const FirstModal = ({setModal}) => {
    return (
        <div className="modal">
            <div className="firstModal">
                <div className="col-1">
                    <img src="../../../public/image_1.png" width="250px"/>
                </div>
                <div className="col-2">
                    <h4>Meu Carrinho</h4>
                    <h3>Microsoft Xbox Series X | Preto</h3>
                    <hr></hr>
                    <p className="price">R$ 2.000,00</p>
                    <p className="color">Cor: Preto</p>
                    <p className="colorBox"></p>
                    <button className="keepBying-btn" onClick={()=> setModal(false)}>Continuar Comprando</button>
                    <button className="finishBuy-btn">Finalizar Compra</button>
                    
                </div>

            </div>
        </div>
    )
}

export default FirstModal;