import React from 'react';
import "./index.scss";
import img_footer from '../../assets/image_footer.png'



const Footer = () => {
  return (
    <div className='footer__home'>
        <img class='footer__img' src={img_footer}></img>
        <h5 className='footer_h5'>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. 
<br/><b>Para mais informações,</b> entre em contato: (011) 1111-2222</h5>
    </div>
  )
}

export default Footer