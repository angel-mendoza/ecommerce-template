import React from 'react'
import CardList from '@/components/cards/CardList.jsx'
import CardSimple from '@/components/cards/CardSimple.jsx'
import Products from '@/data/products'

const HomePage = () => {
  return (
    <CardList>
      {
        Products.map(product => (
            <CardSimple
              key={`card-product-${product.id}`}
              product={product}
            />
        ))
      }
    </CardList>
  )
}

export default HomePage
