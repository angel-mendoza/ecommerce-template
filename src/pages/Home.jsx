import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import AppContext from '@/context/AppContext'

import CardList from '@/components/cards/CardList.jsx'
import CardSimple from '@/components/cards/CardSimple.jsx'
import CardDetail from '@/components/cards/CardDetail.jsx'
import Products from '@/data/products'

const HomePage = () => {
  const { state, closeDetail } = useContext(AppContext)
  return (
    <>
      <CardList>
        {
          Products.map(product => (
              <CardSimple
                key={`card-product-${product.id}`}
                product={product}
              />
          ))
        }
      </CardList>
      <Modal centered show={state.showDetail} onHide={() => closeDetail()}>
        <Modal.Body>
          <CardDetail />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default HomePage
