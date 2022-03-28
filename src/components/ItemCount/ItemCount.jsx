import React, { useState } from 'react'
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

      <button
        className="button-primary"
        onClick={() => onAdd(cantidad)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
    )
}
export default ItemCount