import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
export const ItemDetail  = ({id,description,price,image,category}) => {
  return (
    <div>    
    <Card className='carta' style={{ width: '18rem' }}>
    <Card.Img className='imagen_carta' variant="top" src={image} />
    <Card.Body>
    <Card.Title>{id}</Card.Title>
      <Card.Title>{description}</Card.Title>
      <Card.Title>{category}</Card.Title>
      <Card.Title>{price}</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste molestiae, culpa obcaecati sequi velit eius sint rem dicta quam possimus vero minus quo omnis, deleniti facilis commodi impedit. Ad.
      </Card.Text>
      <div  style={{font:'10px'}}  >
      <ItemCount initial={1} stock={10} onAdd={(counter)=> console.log(`Cantidad Agregada ${counter}`)} />
      </div>
      <Button variant="primary" >Agregar al carrito</Button>
    </Card.Body>
  </Card>
  </div>
  )
}
