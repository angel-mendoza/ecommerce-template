import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

const SidebarApp = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={() => props.handleClose()}
      placement={props.placement ? props.placement : 'start'}
    >
      <Offcanvas.Header closeButton>
        { props.title && <Offcanvas.Title>{props.title}</Offcanvas.Title> }
      </Offcanvas.Header>
      <Offcanvas.Body>
        { props.children }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default SidebarApp
