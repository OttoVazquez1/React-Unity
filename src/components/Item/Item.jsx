import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({name, price, id, stock, foto}) => {
   

    return (
        <Row>
            <Col className="card mt-5 item" >
                <div className="card-header">
                    <p className="fw-bold h2">{`${name}`}</p> 
                </div>
                <div className="card-body">
                    <img src={foto} alt='Foto de producto' className='w-50' />
                    <p className='fst-italic mt-5 price h4'>${price} ARS</p>                                                            
                </div>
                <div className='card-footer'>
                    <Link to={`/detalle/${id}`}>
                        <button className='bttn'>
                            Ir al detalle
                        </button>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}


export default Item