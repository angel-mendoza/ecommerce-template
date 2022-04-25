import React, { useContext } from 'react'
import AppContext from '@/context/AppContext'
import Offcanvas from 'react-bootstrap/Offcanvas'

import CardDetailResume from '@/components/cards/CardDetailResume.jsx'
import CardDetailResumeEmpty from '@/components/cards/CardDetailResumeEmpty.jsx'

import '@/styles/SidebaCart.scss'

const SidebaCart = (props) => {
  const { state } = useContext(AppContext)
  return (
    <Offcanvas
      id="sidebar-cart"
      show={props.show}
      onHide={() => props.handleClose()}
      placement='end'
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          state.cart.length > 0
            ? state.cart.map(item => (
              <CardDetailResume key={`cart-detail-resumen-${item.id}`} product={item} />
            ))
            : <CardDetailResumeEmpty />

        }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SidebaCart
