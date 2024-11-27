import SingleBook from './SingleBook';
import books from "../Assets/books/fantasy.json"
import { Col } from 'react-bootstrap';

const BookList = () => {
  return (
   
    <Col xs={12} md={4} lg={3}>
      {books.map((book, asin) => (
        <SingleBook key={asin} title={book.title} img={book.img} />
      ))}
    </Col>
  );
};

export default BookList;