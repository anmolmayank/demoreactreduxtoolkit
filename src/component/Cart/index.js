import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import CardItem from '../Cards';

export default function Cart() {
    const cartState = useSelector(state => state.cart);
  return (
    <Container>
        <h1 className='text-center'>Cart</h1>
        <Row>
            {console.log("THIS IS CARTSTATE:", cartState)}
            {cartState !== [] && (cartState.map((item)=> <CardItem productItem={item} key={item.id} isDelete={true}/>))}
        </Row>
    </Container>
  )
}
