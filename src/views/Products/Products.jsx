import React from 'react'
import './index.scss'
import { PRODUCT_MOCK } from '../../mock/mock';
import FirstModal from '../../components/FirstModal/FirstModal';
import { useState } from 'react';
import HeaderMenu from "../../../HeaderMenu";


const Products = ({data}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <HeaderMenu />
      {
        modal === true ? (
          <FirstModal setModal={setModal}/> ) : (
            <>
              <div>Products</div>
              <span>teste</span>
              <button onClick={()=>setModal(true)}>Adicionar ao carrinho</button>
            </>  
          )
        
      }
    </>  
  )
}

export default Products