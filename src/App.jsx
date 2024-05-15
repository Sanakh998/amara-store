import React, { useEffect } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import Footer from './Components/Footer/Footer'

const App = () => {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App