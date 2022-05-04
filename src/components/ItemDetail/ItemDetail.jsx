
import { Col, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


function ItemDetail({ producto }) {
  

 
  return (
    <Row className="mt-5 itemDetail">
      <Col xs={5}>
      <img src={producto.foto} alt="Foto del producto" className="w-50 mt-5"/>
      </Col>
      <Col>
        <div className="itemDetail__title">
          <h1>{producto.name}</h1>
        </div>
        <div className="itemDetail__properties">
          <h2>Caracteristicas:</h2>
          <ul>
            {
              producto.descripcion.map((item, i)=> {
                return <li key={i}>{item}</li>
              })
            }
          </ul>
        </div>
        <div className="itemDetail__price">
          <h3>${producto.price} ARS</h3>
        </div>
      <ItemCount stock={producto.stock} inicial={1} producto={producto} id={producto.id} /> 
      
      </Col>
    
    </Row>
  )
}

export default ItemDetail