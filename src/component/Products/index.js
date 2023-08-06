import React, { useEffect } from 'react'
import CardItem from '../Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/productSlice';


export default function Products() {
    //State initialized
    // const [productsList, setProductList] = useState(null);
    const dispatch = useDispatch();
    const {data: productsList, status} = useSelector(state => state.products)

    // Initial load fetch data
    useEffect(() => {
        // API CALL
        // fetch('https://fakestoreapi.com/products')
        //     .then(data=>data.json())
        //     .then(result => setProductList(result));
        dispatch(getProducts());
    }, []);
  return (
    <div>
      <Container>
      <h1>Products List</h1>
        <Row>
          {status === 'Loading' && (
            <div className='text-center'>
              Loading ....
            </div>
          )}
          {productsList !==[] && (
              productsList.map((item) => <CardItem productItem={item} key={item.id} isDelete={false}/>)
          )}
          {
            status === 'error' && (
              <div className='text-center'>
                Something went wrong. Please try again later
              </div>
            )}
        </Row>
      </Container>
    </div>
  )
}
