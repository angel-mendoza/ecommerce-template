import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '@/styles/NotFoundPage.scss'

const NotFoundPage = () => {
  return (
    <div id='Not-found-page'>
      <h2>Lo sentimos</h2>
      <h4>La pagina que estas buscando no existe</h4>
      <Link to="/">
        <Button>
          Volver
        </Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
