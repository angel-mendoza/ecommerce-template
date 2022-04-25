import React from 'react'
import '@/styles/CardTotal.scss'
const CardTotal = ({ total }) => {
  return (
    <div className='card-total'>
      <span>
        Total to pay:
      </span>
      <span className='amount'>
        {`$${total}`}
      </span>
    </div>
  )
}

export default CardTotal
