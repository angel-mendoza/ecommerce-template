import React from 'react'
import { BsTrash } from 'react-icons/bs'
import {
  Button,
  Accordion
} from 'react-bootstrap'

import '@/styles/CardDetailResume.scss'

const CardDetailResume = ({ product, remove }) => {
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
          <div className="d-grid gap-2 mt-3">
            <Button variant='danger' onClick={() => remove(product)} >
              <BsTrash /> Remove
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default CardDetailResume
