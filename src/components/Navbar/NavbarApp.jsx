import React from 'react'
import {
  Col,
  Button,
  Navbar,
  Container
} from 'react-bootstrap'

import { FaBars } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'

import Logo from '../../assets/logo/BrandLogo.svg'

const NavbarApp = ({ handleShowMenu, handleShowCart }) => {
  return (
    <Navbar bg="light" variant="light" fixed="top" >
      <Container fluid>
        <Col>
          <Button onClick={() => handleShowMenu()} variant="light">
            <FaBars size="1.5rem" />
          </Button>
        </Col>
        <Col>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Col>
        <Col>
          <Button onClick={() => handleShowCart()} className='float-end' variant="light">
            <GrCart size="1.5rem" />
          </Button>
        </Col>
      </Container>
    </Navbar>
  )
}

export default NavbarApp
