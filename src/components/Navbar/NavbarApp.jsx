import React from 'react'
import {
  Badge,
  Button,
  Navbar
} from 'react-bootstrap'

import { FaBars } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'

import Logo from '@/assets/logo/BrandLogo.svg'

const NavbarApp = ({ handleShowMenu, handleShowCart }) => {
  return (
    <Navbar bg="light" variant="light" fixed="top" >
      <Button onClick={() => handleShowMenu()} variant="light">
        <FaBars size="1.5rem" />
      </Button>
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Button onClick={() => handleShowCart()} className='float-end' variant="light">
        <GrCart size="1.5rem" />
        <Badge className='badge-cart' bg="primary">1</Badge>
      </Button>
    </Navbar>
  )
}

export default NavbarApp
