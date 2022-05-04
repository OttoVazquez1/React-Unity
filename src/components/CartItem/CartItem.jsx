import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './CartItem.css'

function CartItem({prod, eliminateFromCart}) {
    console.log(prod)
  return (
    <Row className='cart__row'>
                  <Col lg={3} xs={3}><img src={prod.foto} alt="Foto Producto" className='w-10'  /></Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'>{prod.name}</h2> </Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'> {prod.cantidad} </h2> </Col>
                  <Col lg={2} xs={2}> <h4 className='fst-italic h5 mt-4'> ${prod.price*prod.cantidad} ARS </h4> </Col>
                  <Col lg={2} xs={2}> <button className='btn btn-outline-danger mt-4' onClick={()=>eliminateFromCart(prod.id)} >X</button></Col>
          </Row>
  )
}

export default CartItem