import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const InputCount =  () => {
    return (
    <>
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
    </>   
    )
}

const ButtonCount= ({handleInter, onAdd, cantidad, stock})=> {
    return (
        <div onClick={handleInter}>
            <button
                className="btn btn-outline-primary"
                onClick={() => onAdd(cantidad)}
                disabled={stock === 0 ? true : null}
            >Agregar Al carrito</button>
        </div>
    )
}

function Intercambiabilidad({onAdd, cantidad, stock}) {
    
    const [inputType, setInputType] = useState('button')

    const handleInter = ()=> {
        setInputType('input')
    }

    return (
    <>
        {
            inputType === 'button' ?
                <ButtonCount handleInter={handleInter} onAdd={onAdd} cantidad={cantidad} stock={stock} />
            
            :
            <InputCount />
        }
        
    </>
  )
}

export default Intercambiabilidad