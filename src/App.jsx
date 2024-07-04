
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import ProductPage from './components/ProductPage'
import BasketContext from './contexts/BaksetContext'
import { useState } from 'react'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Layout>

        </BrowserRouter>
      </BasketContext.Provider>
    </>
  )
}

export default App
