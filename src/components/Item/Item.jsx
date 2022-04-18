import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({name, price, id, stock, foto}) => {
   

    return (
        <div className='row  row-cols-lg-expand justify-content-center'>
                              <div className="card mt-5 col" >
                                  <div className="card-header">
                                    <p className="fw-bold h3">{`${name}`}</p> 
                                  </div>
                                  <div className="card-body">
                                    <img src={foto} alt='Foto de producto' className='w-50' />
                                        <p className='fst-italic'>${price} ARS</p>                                                            
                                  </div>
                                  <div className='card-footer'>
                                      
                                      <Link to={`/detalle/${id}`}>
                                          <button className='btn btn-outline-primary btn-block'>
                                                Ir al detalle
                                          </button>
                                      </Link>
                                  </div>
                              </div>
                            </div>
    )
}


export default Item