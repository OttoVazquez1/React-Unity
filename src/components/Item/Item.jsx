import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx';

const Item = ({name, price, id, stock, foto}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} ${name} al carrito!`);
    };

    return (
        <div className='row  row-cols-lg-expand justify-content-center'>
                              <div className="card mt-5 col" >
                                  <div className="card-header">
                                    <p className="fw-bold h3">{`${name}`}</p> 
                                  </div>
                                  <div className="card-body">
                                    <img src={foto} alt='Foto de producto' className='w-50' />
                                        <p className='fst-italic'>${price}ARS</p>                                                            
                                  </div>
                                  <div className='card-footer'>
                                      <ItemCount stock={stock} onAdd={onAdd} inicial={1} />
                                  </div>
                              </div>
                            </div>
    )
}


export default Item