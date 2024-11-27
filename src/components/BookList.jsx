import SingleBook from './SingleBook'; // Il componente che mostra la card
import books from "../Assets/books/fantasy.json"
import { Col } from 'react-bootstrap';

const BookList = () => {
  return (
    <Col xs={12} md={4} lg={3}>
      {books.map((book, index) => (
        <SingleBook key={index} title={book.title} img={book.img} />
      ))}
    </Col>
  );
};

export default BookList;