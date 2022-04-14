import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
//import { getFetch } from "../../helpers/getFetch"

function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { detalleId } = useParams()


    //useEffect para recibir productos via js
    /* useEffect(()=> {  
        
      if (detalleId) {
        getFetch
        .then(resp => setProducto(resp.find(item => item.id === detalleId)))
        .catch(err => console.log(err) )
        .finally(() => setLoading(false))
        
      } else {
        getFetch
        .then(resp => setProducto(resp))
        .catch(err => console.log(err) )
        .finally(() => setLoading(false))
      }
      
    },[detalleId]) */
    

    //Firebase
    
    
    useEffect(()=>{
      const querydb = getFirestore()
      const item = doc(querydb, 'productos', detalleId)
      if(detalleId){
        
        getDoc(item)
        .then(resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

      }else{
        
        getDoc(item)
        .then(resp => setProducto({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
      }
    }, [detalleId])

  return (
    <>
    {   loading ? 
    <></>
    :
    
        
            <ItemDetail producto={producto} />
        
      
    }
    
    </>
  )
}

export default ItemDetailContainer