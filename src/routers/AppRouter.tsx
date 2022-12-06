import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import ProductsList from '../pages/ProductsList'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={<ProductsList />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter