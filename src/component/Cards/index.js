import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { add, remove } from '../../store/cartSlice';

export default function CardItem({productItem, isDelete}) {

  //Here we going to use dispatch
  const dispatch = useDispatch();
  const addtocart = (item) => {
    //Which method you want dispatch and payload
    dispatch(add(item));
  };
  const removecart = (id) => {
    dispatch(remove(id));
  };

  return (
    <Col key={productItem.id} className='text-center'> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={productItem.image} style={{width: '30%', height: '30%'}} className='mx-auto'/>
        <Card.Body>
          <Card.Title>{productItem.title}</Card.Title>
          <Card.Subtitle>{productItem.category}</Card.Subtitle>
          <Card.Text style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>
            {productItem.description}
          </Card.Text>
          <Card.Text>Price: ${productItem.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {isDelete ? <Button variant="danger" onClick={() => removecart(productItem.id)}>Remove from cart</Button> : <Button variant="primary" onClick={() => addtocart(productItem)}>Add to cart</Button>}
        </Card.Footer>
      </Card>
    </Col>
  )
}
