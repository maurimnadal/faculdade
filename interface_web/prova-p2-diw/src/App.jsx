import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import ProductDetails from './pages/productDetails';
import AddProduct from './pages/addProduct';
import EditProduct from './pages/editProduct';
import './app.css'

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
    </Routes>

  )
}

export default App;