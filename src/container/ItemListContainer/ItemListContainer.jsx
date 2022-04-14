import React, { useEffect, useState } from 'react'
//import { getFetch } from '../../helpers/getFetch'
import Item from '../../components/Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer() {

  const [productos, setProductos] = useState([])
 //const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { categoriaId } = useParams()
  /* 
  useEffect(()=> {  
          if (categoriaId) {
            getFetch
            .then(resp => setProductos(resp.filter(item => item.categoria === categoriaId)))
            .catch(err => console.log(err) )
            .finally(() => setLoading(false))
            
          } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err) )
            .finally(() => setLoading(false))
            
          }
    
  },[categoriaId])
  */
  
  //FIREBASE

  //useEffect para traer 1 objeto
 /*  useEffect(()=>{
    const querydb = getFirestore()
    const queryProd = doc(querydb, 'productos', 'BiS6KnBlTgg5Awofg8nt');
    
    getDoc(queryProd)
    // Consigo los datos del objeto
    .then(resp => setProducto( { id: resp.id, ...resp.data() } ))
  }, []) */
  
  
  
  //useEfect para traer todos los objetos
  useEffect(()=>{
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos');
    //Filtro para remeras
    const queryFilterTees = query(queryCollection,
       where('categoria', '==', 'tees' )
       //where('price', '<=', 6500),
       //Limit() para poner un tope a los resultados
       //limit(5),
       )
      //Filtro para hoodies
      const queryFilterHoodies = query(queryCollection,where('categoria', '==', 'hoodie' ))


    if(categoriaId === 'tees'){
      
      getDocs(queryFilterTees)
      .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ))
      .catch(err => console.log(err) )
      .finally(() => setLoading(false))
      
    } else if(categoriaId === 'hoodie'){
      
      getDocs(queryFilterHoodies)
      .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ))
      .catch(err => console.log(err) )
      .finally(() => setLoading(false))
      
    }else {
      
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data() }) ) ))
      .catch(err => console.log(err) )
      .finally(() => setLoading(false))
      
    }
  }, [categoriaId])

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