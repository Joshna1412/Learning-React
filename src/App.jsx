import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  render() {
    return (
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
          <Route exact path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App