import React from "react";
import "./index.scss"


const FirstModal = ({setModal, data}) => {
    console.log(data);
    return (
        <div className="modal">
            <div className="firstModal">
                <div className="col-1">
                    <img src={data.imgPath} width="250px"/>
                </div>
                <div className="col-2">
                    <h4>Meu Carrinho</h4>
                    <h3>{data.title}</h3>
                    <hr></hr>
                    <p className="price">R$ {data.price}</p>
                    <p className="color">Cor: {data.colors}</p>
                    {data.colors.map((color) => (
                        <p className="colorBox" style={{backgroundColor: color}}></p>
                    ))

                    }
                    <button className="keepBying-btn" onClick={()=> setModal(false)}>Continuar Comprando</button>
                    <button className="finishBuy-btn">Finalizar Compra</button>
                    
                </div>

            </div>
        </div>
    )
}

export default FirstModal;
