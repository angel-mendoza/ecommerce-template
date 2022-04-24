import React, { useState, useContext } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import AppContext from '@/context/AppContext'

import brandCard from '@/assets/logo/brandCard.svg'
import '@/styles/CardDetail.scss'

const CardDetail = () => {
  const { state, addToCart, closeDetail } = useContext(AppContext)
  const [productQuantity, setProductQuantity] = useState(1)

  const handleProductQuantity = (operator) => {
    if (operator === '+' && productQuantity < 9) {
      setProductQuantity(productQuantity + 1)
    }
    if (operator === '-' && productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }

  const handleClick = (item) => {
    addToCart({
      ...item,
      quantity: productQuantity
    })
  }

  return (
    <div className='card-detail'>
      <span className='btn-like'>
        <AiOutlineHeart size="2rem" />
      </span>
      <img
        src={brandCard}
        className="brand-card"
        alt="brand-card"
      />
      { state.product.image &&
        <img
          className='image-product'
          src={require(`@/assets/products/${state.product.image}`)}
          alt={`product-${state.product.name}`}
        />
      }
      <div className='description-body'>
        <h6>{ state.product.tag }</h6>
        <h2>{ state.product.name }</h2>
        <div className='container-product-quantity'>
          <button className='btn' onClick={() => handleProductQuantity('-')}>-</button>
          <span>
            {productQuantity}
          </span>
          <button className='btn' onClick={() => handleProductQuantity('+')}>+</button>
        </div>
        <p>{ state.product.description }</p>
        <h1>${state.product.price}</h1>
        <div className='footer'>
          <button className='btn' onClick={closeDetail} >
            Volver
          </button>
          <button className='btn add-cart' onClick={() => handleClick(state.product)} >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
