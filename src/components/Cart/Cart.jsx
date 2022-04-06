import './Cart.css'
import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'

import { Col, Container, Row } from 'react-bootstrap'


function Cart() {

  const { cart, RemoveCart } = useCartContext()
  
  return (
  <Container>
    
      {cart.map(prod => 
          <Row key={prod.id} >
              <img src={prod.foto} alt="" className='w-25' as={Col} />
              <h4 as={Col}>{prod.name}</h4>
              <h4 as={Col}>{prod.cantidad}</h4>
              <h4 as={Col}>{prod.price}</h4>
              <button className='btn btn-outline-warning' onClick={RemoveCart}>Vaciar Carrito</button>
          </Row>
        )}
    
  </Container>
  )
}

export default Cart