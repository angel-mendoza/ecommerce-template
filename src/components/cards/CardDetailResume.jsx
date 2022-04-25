import React from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
import Accordion from 'react-bootstrap/Accordion'

import '@/styles/CardDetailResume.scss'

const CardDetailResume = ({ product }) => {
  return (
    <div className='Card-detail-resume'>
    <Accordion>
      <Accordion.Item eventKey={product.id}>
        <Accordion.Header>{product.name}</Accordion.Header>
        <Accordion.Body>
          <div className='columm-data'>
            <span className='title'>Quantity:</span>
            <span className='value'>{product.quantity}</span>
          </div>
          <div className='columm-data'>
            <span className='title'>Price Unit:</span>
            <span className='value'>${product.price}</span>
          </div>
          <div className="columm-data">
            <span className="title">Total to pay for the product</span>
            <span className='total'>${product.price * product.quantity}</span>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default CardDetailResume
