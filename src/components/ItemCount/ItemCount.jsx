import React, { useState } from 'react'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad';
import '../ItemCount/ItemCount.css'

const ItemCount = ({inicial, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial);
    
    const addProduct = (num) => {
        setCantidad(cantidad + num);
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
        <Intercambiabilidad onAdd={onAdd} cantidad={cantidad} stock={stock}/>
    </div>
    )
}
export default ItemCount