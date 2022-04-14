
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ producto }) {
  

 
  return (
    <>
    <div>{producto.name}</div>
    <div>{producto.price}</div>
    <div><img src={producto.foto} alt="Foto del producto" className="w-50"/></div>
    <div>
      <ul>
        {
          producto.descripcion.map((item)=> {
            return <li key={Number.toString()}>{item}</li>
          })
        }
      </ul>
    </div>
    <ItemCount stock={producto.stock} inicial={1} producto={producto} id={producto.id} />
    </>
  )
}

export default ItemDetail