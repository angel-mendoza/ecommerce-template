import React from 'react'
import { GrCart } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'

import '@/styles/CardSimple.scss'
import brandCard from '@/assets/logo/brandCard.svg'

const CardSimple = ({ product }) => {
  return (
    <div className='card-simple'>
        <span className='btn-like'>
          <AiOutlineHeart size="2rem" />
        </span>
       <img
         src={brandCard}
         className="brand-card"
         alt="brand-card"
       />
       <img
         className='image-product'
         src={require(`@/assets/products/${product.image}`)}
         alt={`product-${product.name}`}
       />
       <div className='description-body'>
         <h2>{ product.name }</h2>
         <div className='footer'>
           <h5>$ {product.price}</h5>
           <button className='btn'>
             <GrCart size="1.5rem" />
           </button>
         </div>
       </div>
    </div>
  )
}

export default CardSimple
