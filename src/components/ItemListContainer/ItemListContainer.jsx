import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'


function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=> {  
          getFetch
          .then(resp => setProductos(resp) )
          .catch(err => console.log(err) )
          .finally(() => setLoading(false))
  },[])
 

  return (
    <div className='container'>
        { loading ? 
          <h2>Cargando..</h2>
        :
          productos.map((producto)=> <div key={producto.id} className='row  row-cols-lg-expand justify-content-center'>
                              <div className="card mt-5 col" >
                                  <div className="card-header">
                                    <p className="fw-bold h3">{`${producto.name}`}</p> 
                                  </div>
                                  <div className="card-body">
                                    <img src={producto.foto} alt='Foto de producto' className='w-50' />
                                        <p className='fst-italic'>${producto.price}ARS</p>                                                            
                                  </div>
                                  <div className='card-footer'>
                                      <ItemCount /><br />
                                      <button className="btn btn-outline-primary btn-block">Comprar</button>
                                  </div>
                              </div>
                            </div>
        )}
    </div>
  )
}

export default ItemListContainer