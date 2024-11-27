import SingleBook from './SingleBook';
import books from "../Assets/books/fantasy.json"
import { Col, Row } from 'react-bootstrap';

const BookList = () => {
  return (
    <Row>
    
      {books.map((book, asin) => (
        <Col xs={12} md={4} lg={3}>
        <SingleBook key={book.asin} title={book.title} img={book.img} />
        </Col>
      ))}
    
    </Row>
  );
};

export default BookList;