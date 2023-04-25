import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import FirstModal from '../../components/FirstModal/FirstModal';
import { useState } from 'react';
const ProductDetail = ({ data }) => {
    const [modal, setModal] = useState(false);

    return (
      <div className="product-detail">
        <div className="product-detail__left-side">
          <div className="product-detail__card">
            <img src={data.imgPath} alt={data.title} />
            <p>{data.title}</p>
          </div>
          <div className="product-detail__description">
            <h1>Descrição</h1>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="product-detail__right-side">
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
          <p>
            Cor:{" "}
            {data.colors.length === 1
              ? data.colors.map((color, index) => (
                  <span key={index}>{color}</span>
                ))
              : data.colors.map((color, index) =>
                  index + 1 === data.colors.length ? (
                    <span key={index}>{color}</span>
                  ) : (
                    <span key={index}>{color}, </span>
                  )
                  )}
                
                  
          </p>
          <div className="product-detail__cube-colors">
            {data.colors.map((color) => (
              <div
                style={{
                  width: "55px",
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: color,
                  border:"2px solid black" 
                }
             }
             ></div>
             
            ))}
          
          {
        modal === true ? (
          <FirstModal setModal={setModal} data={data} /> ) : (
              <button onClick={()=>setModal(true)}>Adicionar ao carrinho</button>
          )
        
      }
              </div>
              
              </div>
              </div>
           
    );

 };
 
  

export default ProductDetail;