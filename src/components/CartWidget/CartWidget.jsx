import React from 'react'
import '../CartWidget/CartWidget.css'
import logo from '../../helpers/shopping-cart.png'
import { useCartContext } from '../../context/CartContext/CartContext'

function CartWidget() {
    const {quantity} = useCartContext()
  return (
    <>
    { quantity > 0 &&
    <div className='cart-widget'>
        <img src={logo} alt="" className='cart-widget_logo' />
        <h4>{quantity}</h4>
    </div>
    }
    </>
    )
}

export default CartWidget