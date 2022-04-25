import { useState, useEffect } from 'react'

const InitalState = {
  cart: [],
  amount: 0,
  showDetail: false,
  product: {},
  dataWts: ''
}

const useInitalState = () => {
  const [state, setState] = useState(InitalState)

  useEffect(() => {
    if (state.cart.length > 0) {
      let newTotal = 0

      state.cart.forEach(item => {
        newTotal = newTotal + (item.price * item.quantity)
      })

      setState({
        ...state,
        dataWts: prepareUrl(),
        amount: newTotal
      })
    }
  }, [state.cart.length])

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

  const prepareUrl = () => {
    const body = []
    body.push('Good evening. I would like to place an order')
    state.cart.forEach(item => {
      body.push(`${item.name} quantity: ${item.quantity}`)
    })
    const bodyString = body.toString()
    return bodyString.replaceAll(',', '%0A')
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
