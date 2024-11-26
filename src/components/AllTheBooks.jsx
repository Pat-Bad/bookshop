import books from "../Assets/books/history.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

const AllTheBooks = function(){
    return (
        books.map((book)=>{
            return (
<Col xs={12} md={4} lg={3}>
    <Card className="mb-2 w-75 flex-fill">
      <Card.Img variant="top" src={book.img}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="primary">Read me!</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}
    )
    )
}

export default AllTheBooks