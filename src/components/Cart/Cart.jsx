
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import { FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import CartItem from '../CartItem/CartItem'
import './Cart.css'




function Cart() {
  //Traigo cart, removeCart y total del cartContext
  const { cart, RemoveCart, total, eliminateFromCart} = useCartContext()
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
  
  
  console.log(cart)
  return (
    <div className='container mt-3'>
      {cart.length === 0 ?
        <div className='cart__noItemsDiv'>
        <h1 className='display-5 fst-italic'>Aún no elegiste tus productos!</h1>
        <Link to={'/'}>
          <button className='mt-4 bttn'>Vamos al catalogo!</button>
        </Link>
        </div>
        :
        
        
        <> 
        <div className='cart__title'>
          <h1>Tu Carrito:</h1>
        </div>
        
        {cart.map(prod => 
            
              <CartItem key={prod.id} prod={prod} eliminateFromCart={eliminateFromCart} />
            
              
          )}
          <Row>
            <h4 className='align-right'>Total: {total}</h4>
          </Row>
            <button className='bttn w-25 mt-5' onClick={RemoveCart}>Vaciar Carrito</button>
            <button className='bttn w-25 mt-5' onClick={() => {setOpenPay(true)}}>Realizar compra</button>
            
            {openPay &&
              <Form className='form'>
                <div>
                  <input type="text" className='mb-2 mt-3 input' placeholder='Ingresa tu nombre' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <input type='text'className='mb-2 mt-3 input' placeholder='Ingresa tu numero de telefono' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                  <input type='email' className='mb-2 mt-3 input' placeholder='Ingresa tu correo electronico' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type='submit' className='bttn' onClick={submitOrder}>Enviar!</button>
              </Form>
            }
            
            
            </>
        

      }
  </div>
  )
}


export default Cart