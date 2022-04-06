import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../container/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import CartContextProvider from '../context/CartContext/CartContext'

function RoutesApp() {
  return (
    <BrowserRouter>
        <CartContextProvider>
            <NavBar />
            <Routes>
                <Route 
                    path='/' 
                    element={<ItemListContainer
                    />} 
                /> 
                <Route 
                    path='/categoria/:categoriaId' 
                    element={<ItemListContainer
                    />} 
                /> 
                <Route
                    path='/detalle/:detalleId'
                    element={<ItemDetailContainer />}
                />
                <Route
                    path='/cart'
                    element={<Cart />}
                />
                <Route
                    path='/*'
                    element={<Navigate to='/' replace />}
                /> 
            </Routes>
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default RoutesApp