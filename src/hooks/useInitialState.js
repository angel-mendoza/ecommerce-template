import { useState } from 'react'

const InitalState = {
  cart: [],
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
    setState({
      ...state,
      showDetail: false,
      cart: [...state.cart, payload]
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
