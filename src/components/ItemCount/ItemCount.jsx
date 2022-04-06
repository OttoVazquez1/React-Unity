import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext';
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';
import '../ItemCount/ItemCount.css'

const ItemCount = ({inicial, stock, producto, id}) => {
    const [cantidad, setCantidad] = useState(inicial);
    
    const addProduct = (num) => {
        setCantidad(cantidad + num);
    }

    const {addToCart} = useCartContext()
  
    const onAdd = (cantidad, producto, id) => {
        addToCart(producto, id, cantidad)
        
    }

    return (
        <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={cantidad === inicial ? true : null}
        >
          -
        </button>
        <span className="count-container__cantidad">{cantidad}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={cantidad === stock ? true : null}
        >
          +
        </button>
      </div>
        <Intercambiabilidad onAdd={onAdd} qty={cantidad} stock={stock} producto={producto} id={id}/>
    </div>
    )
}
export default ItemCount