import React from 'react'
import '@/styles/CardList.scss'
const CardList = ({ children }) => {
  return (
    <div className='card-grid'>
      { children }
    </div>
  )
}

export default CardList
