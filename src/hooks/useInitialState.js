import { useState } from 'react'

const InitalState = {
  cart: [
    {
      id: 1,
      quantity: 2,
      name: 'Product 1 Facial',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ratione labore possimus velit modi.',
      price: 20,
      tag: 'Facial',
      image: 'product.png'
    },
    {
      id: 2,
      quantity: 5,
      name: 'Product 2 Facial',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ratione labore possimus velit modi.',
      price: 23,
      tag: 'Facial',
      image: 'product2.png'
    },
    {
      id: 3,
      quantity: 1,
      name: 'Product 3 Facial',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ratione labore possimus velit modi.',
      price: 30,
      tag: 'Facial',
      image: 'product3.png'
    }
  ],
  showDetail: false,
  product: {}
}

const useInitalState = () => {
  const [state, setState] = useState(InitalState)

  const selectProduct = (payload) => {
    setState({
      ...state,
      showDetail: true,
      product: payload
    })
  }

  const closeDetail = () => {
    setState({
      ...state,
      product: {},
      showDetail: false
    })
  }

  const addToCart = (payload) => {
    const newProduct = state.cart.find(item => item.id === payload.id)
    let newCartList = []

    if (newProduct) {
      newCartList = state.cart.filter(item => item.id !== payload.id)
      newCartList.push({
        ...payload,
        quantity: newProduct.quantity + payload.quantity
      })
    } else {
      newCartList = state.cart
      newCartList.push(payload)
    }

    setState({
      ...state,
      showDetail: false,
      cart: newCartList
    })
  }

  const removeCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeCart,
    closeDetail,
    selectProduct
  }
}

export default useInitalState
