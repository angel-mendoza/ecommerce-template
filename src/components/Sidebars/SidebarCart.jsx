import React, { useContext } from 'react'
import AppContext from '@/context/AppContext'
import {
  Button,
  Offcanvas
} from 'react-bootstrap'

import { MdOutlinePayments } from 'react-icons/md'

import CardDetailResume from '@/components/cards/CardDetailResume.jsx'
import CardDetailResumeEmpty from '@/components/cards/CardDetailResumeEmpty.jsx'
import CardTotal from '@/components/cards/CardTotal.jsx'

import '@/styles/SidebaCart.scss'

const SidebaCart = (props) => {
  const { state, removeCart } = useContext(AppContext)

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
              <CardDetailResume
                key={`cart-detail-resumen-${item.id}`}
                product={item}
                remove={removeCart}
              />
            ))
            : <CardDetailResumeEmpty />
          }
        {state.cart.length > 0 && (
          <>
            <CardTotal total={state.amount} />
            <div className="d-grid gap-2 mt-4">
              <Button size='lg' variant='success' >
                <MdOutlinePayments size="2rem" /> Process the Payment
              </Button>
            </div>
          </>

        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SidebaCart
