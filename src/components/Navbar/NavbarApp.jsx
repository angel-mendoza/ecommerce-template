import React, { useContext } from 'react'
import {
  Badge,
  Button,
  Navbar
} from 'react-bootstrap'

import AppContext from '@/context/AppContext'

import { FaBars } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'

import Logo from '@/assets/logo/BrandLogo.svg'

const NavbarApp = ({ handleShowMenu, handleShowCart }) => {
  const { state } = useContext(AppContext)
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
        { state.cart.length > 0 ? <Badge className='badge-cart' bg="primary">{state.cart.length}</Badge> : null}
      </Button>
    </Navbar>
  )
}

export default NavbarApp
