import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './item.css'
import { Link } from 'react-router-dom'
export const Item = ({id,description,price,image,category}) => {
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
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Link to={`/detail/${id}`}>
      <Button variant="primary" >Detalles</Button>
      </Link>
    </Card.Body>
  </Card></div>
  )
}
