import React, { Component } from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificProduct from './components/SpecificProduct'
import CartContext from './components/CartContext'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    setCartList(prevCartList => {
      const existingItem = prevCartList.find(item => item.id === product.id)
      if (existingItem) {
        return prevCartList.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      }
      return [...prevCartList, product]
    })
  }

  const deleteCartItem = id => {
    setCartList(prevCartList =>
      prevCartList.filter(item => item.id !== id)
    )
  }
  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        deleteCartItem,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }></Route>
          <Route exact path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }></Route>
          <Route exact path="/products/:id" element={
            <ProtectedRoute>
              <SpecificProduct />
            </ProtectedRoute>
          }></Route>
          <Route exact path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App