import './Cart.css'
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
//import firebase from  'firebase/app'




function Cart() {
  //Traigo cart, removeCart y total del cartContext
  const { cart, RemoveCart, total} = useCartContext()
  //Estado para mostrar formulario
  const [openPay, setOpenPay] = useState(false)
  // Estados para guardar informacion del formulario
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  
  //Func para enviar la order
 const submitOrder = async (e) => {
    e.preventDefault()
    const order = {
      
      buyer: { name: name, phone: phone, email: email},
      items: cart,
      
      total: total,
      
    }
    
    const db = getFirestore()
    const orders = collection(db, 'orders')
    
    addDoc(orders, order)
    .then(({ id }) => alert("Anota el id de tu compra " + id))
    .catch((err) => console.log(err))
    .finally(() => RemoveCart() )
    
  }  
  
  
  
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
          <Row>
            <h4 className='align-right'>Total: {total}</h4>
          </Row>
            <button className='btn btn-outline-danger w-25 mt-5' onClick={RemoveCart}>Vaciar Carrito</button>
            <button className='btn btn-outline-danger w-20 mt-5' onClick={() => {setOpenPay(true)}}>Realizar compra</button>
            
            {openPay &&
              <Form>
                <FloatingLabel
                  className='mb-2 mt-3' 
                  controlId='cartFormName'
                  label="Ingresa tu nombre"
                 >
                    <Form.Control type='text' placeholder='Lionel Messi' onChange={(e) => setName(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel className='mb-2' controlId='cartFormPhone' label="Ingresa tu numero de telefono">
                    <Form.Control type='text' placeholder='011-5656-5656' onChange={(e) => setPhone(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel className='mb-2' controlId='cartFormEmail' label="Ingresa tu correo electronico">
                    <Form.Control type='email' placeholder='lionelandresmessi@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
                <Button type='submit' onClick={submitOrder}>Enviar!</Button>
              </Form>
            }
            
            
            </>
        

      }
  </div>
  )
}


export default Cart