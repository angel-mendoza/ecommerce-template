import React, { useState } from 'react'
import Navbar from '@/components/Navbar/NavbarApp.jsx'
import SidebarApp from '@/components/Sidebars/SidebarApp.jsx'
import '@/styles/Layout.scss'

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const handleCloseMenu = () => setShowMenu(false)
  const handleShowMenu = () => setShowMenu(true)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  console.log(showCart, showMenu)
  return (
    <div>
      <SidebarApp show={showMenu} handleClose={handleCloseMenu} />
      <SidebarApp title="Your Cart" show={showCart} handleClose={handleCloseCart} placement='end' />
      <Navbar handleShowMenu={handleShowMenu} handleShowCart={handleShowCart} />
      <div id='layout-app' >
        { children }
      </div>
    </div>
  )
}

export default Layout
