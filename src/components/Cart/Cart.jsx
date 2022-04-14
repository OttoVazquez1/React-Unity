import './Cart.css'
import React from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Cart() {
  const { cart, RemoveCart,  } = useCartContext()
  
  
  return (
    <div className='container mt-3'>
      {cart.length === 0 ?
        <div>
        <h1 className='display-5 fst-italic'>Aún no elegiste tus productos!</h1>
        <Link to={'/'}>
          <Button variant='dark' className='mt-4'>Vamos al catalogo!</Button>
        </Link>
        </div>
        :
        <> 
        {cart.map(prod => 
        <Row key={prod.id} className='cart__row'>
                  <Col lg={3} xs={3}><img src={prod.foto} alt="Foto Producto" className='w-10'  /></Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'>{prod.name}</h2> </Col>
                  <Col lg={2} xs={2}> <h2 className='fst-italic h5 mt-4'> {prod.cantidad} </h2> </Col>
                  <Col lg={2} xs={2}> <h4 className='fst-italic h5 mt-4'> ${prod.price*prod.cantidad} ARS </h4> </Col>
                  <Col lg={2} xs={2}> <button className='btn btn-outline-danger mt-4' >X</button></Col>
          </Row>
                )}
            <button className='btn btn-outline-danger w-25 mt-5' onClick={RemoveCart}>Vaciar Carrito</button>
            </>
      }
  </div>
  )
}


export default Cart