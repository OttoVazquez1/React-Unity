import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({ producto }) {
   const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} ${producto.name} al carrito!`);
    };

  return (
    <>
    <div>{producto.name}</div>
    <div>{producto.price}</div>
    <div><img src={producto.foto} alt="Foto del producto" className="w-50"/></div>
    <ItemCount stock={producto.stock} onAdd={onAdd}  inicial={1} />
    </>
  )
}

export default ItemDetail