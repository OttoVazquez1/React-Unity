import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const InputCount =  () => {
    return (
    <Row>
        <Link to='/cart'>
            <button
            className='btn btn-outline-primary'
            onClick={() => console.log('Ir al carrito')}>Ir al carrito</button>
        </Link>
        <Link to='/'>
            <button
            className='btn btn-outline-primary'
            onClick={() => console.log('Ir al home')}>Seguir comprando</button>
        </Link>
    </Row>   
    )
}

const ButtonCount= ({handleInter, onAdd, qty, stock, id, producto})=> {
    return (
        <div onClick={handleInter}>
            <button
                className="btn btn-outline-primary"
                onClick={() => onAdd(qty, producto, id)}
                disabled={stock === 0 ? true : null}
            >Agregar Al carrito</button>
        </div>
    )
}

function Intercambiabilidad({onAdd, qty, stock, producto, id}) {
    
    const [inputType, setInputType] = useState('button')

    const handleInter = ()=> {
        setInputType('input')
    }

    return (
    <>
        {
            inputType === 'button' ?
                <ButtonCount handleInter={handleInter} onAdd={onAdd} qty={qty} stock={stock} producto={producto} id={id} />
            
            :
            <InputCount />
        }
        
    </>
  )
}

export default Intercambiabilidad