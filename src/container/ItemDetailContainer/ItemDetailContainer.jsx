import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    

    useEffect(()=> {  
        getFetchOne
        .then(resp => setProducto(resp.find(prod => prod.id === 1)) )
        .catch(err => console.log(err) )
        .finally(() => setLoading(false))
},[])

  return (
    <>
    <ItemDetail producto={producto} />
    </>
  )
}

export default ItemDetailContainer