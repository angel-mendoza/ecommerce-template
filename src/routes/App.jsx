import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout.jsx'
import AppContext from '@/context/AppContext'
import useInitialState from '@/hooks/useInitialState'

import Home from '@/pages/Home.jsx'
import NotFound from '@/pages/NotFound.jsx'

import '@/styles/global.scss'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
