import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const InputCount =  () => {
    return (
    <Row>
        <Col>
            <Link to='/cart'>
                <button
                className='bttn'
                onClick={() => console.log('Ir al carrito')}>Ir al carrito</button>
            </Link>
        </Col>
        <Col>
            <Link to='/'>
                <button
                className='bttn'
                onClick={() => console.log('Ir al home')}>Seguir comprando</button>
            </Link>
        </Col>
    </Row>   
    )
}

const ButtonCount= ({handleInter, onAdd, qty, stock, id, producto})=> {
    return (
        <div onClick={handleInter}>
            <button
                className='bttn mt-2'
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