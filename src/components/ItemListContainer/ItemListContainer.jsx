import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import Item from '../Item/Item'



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
          productos.map((producto)=> {
            return(
              <div key={producto.id}>
                <Item name={producto.name} foto={producto.foto} price={producto.price} stock={producto.stock} id={producto.id} />
              </div>
            )
          } 
          )
        }
    </div>
  )
      }
export default ItemListContainer