import React, { useState } from 'react'
import Navbar from '@/components/Navbar/NavbarApp.jsx'
import SidebarApp from '@/components/Sidebars/SidebarApp.jsx'
import SidebarCart from '@/components/Sidebars/SidebarCart.jsx'
import '@/styles/Layout.scss'

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleCloseMenu = () => setShowMenu(false)
  const handleShowMenu = () => setShowMenu(true)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  return (
    <div>
      <SidebarApp show={showMenu} handleClose={handleCloseMenu} />
      <SidebarCart show={showCart} handleClose={handleCloseCart} />
      <Navbar handleShowMenu={handleShowMenu} handleShowCart={handleShowCart} />
      <div id='layout-app' >
        { children }
      </div>
    </div>
  )
}

export default Layout
