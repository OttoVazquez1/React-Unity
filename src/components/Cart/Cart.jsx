import './Cart.css'
import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { Col, Row } from 'react-bootstrap'




function Cart() {
  
  const { cart, RemoveCart } = useCartContext()
  
  
  return (
    <div className='container mt-3'>
    
      {cart.map(prod => 
                <Row key={prod.id} className='cart__row'>
                  <Col lg={3} xs={3}><img src={prod.foto} alt="Foto Producto" className='w-10'  /></Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'>{prod.name}</h2> </Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'> {prod.cantidad} </h2> </Col>
                  <Col lg={2} xs={2}> <h4 className='fst-italic h5 mt-4'> ${prod.price*prod.cantidad} ARS </h4> </Col>
                  <Col lg={2} xs={2}> <ButtonX id={prod.id}/></Col>
                </Row>
                )}
                <button className='btn btn-outline-danger w-25 mt-5' onClick={RemoveCart}>Vaciar Carrito</button>
    
  </div>
  )
}

function ButtonX(id){
  const {eliminateFromCart} =  useCartContext()
  return (
    <button className='btn btn-outline-danger mt-4' onClick={eliminateFromCart(id)}>X</button> 
  )
}

export default Cart