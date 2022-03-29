import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {  
        getFetchOne
        .then(resp => setProducto(resp))
        .catch(err => console.log(err) )
        .finally(() => setLoading(false))
},[])

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