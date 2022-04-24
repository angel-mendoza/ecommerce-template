import React from 'react'
import Navbar from '../components/Navbar/NavbarApp.jsx'
import '../styles/Layout.scss'

const Layout = ({ children }) => {
  return (
    <div id='layout-app' >
      <Navbar />
      { children }
    </div>
  )
}

export default Layout
