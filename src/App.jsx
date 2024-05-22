import React, { useEffect } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'
import WomenCloths from './Components/CategoryProducts/WomenCloths'
import MenCloths from './Components/CategoryProducts/MenCloths'
import Electronics from './Components/CategoryProducts/Electronics'
import Jewelry from './Components/CategoryProducts/Jewelry'
import CartProvider from './Components/Contexts/CartContext'
import CartPage from './Pages/CartPage'

const App = () => {

  return (
    <Router>
      <CartProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/jewelry' element={<Jewelry/>}/>
        <Route path='/products/electronics' element={<Electronics/>}/>
        <Route path="/products/men-clothing" element={<MenCloths/>}/>
        <Route path="/products/women-clothing" element={<WomenCloths/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
      <Footer/>
      </CartProvider>
    </Router>
  )
}

export default App