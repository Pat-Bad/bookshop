import books from "../Assets/books/history.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllTheBooks = function(){
    return (
        books.map((book)=>{
            return (

    <Card className="mb-3 me-3 w-50 d-flex flex-wrap">
      <Card.Img variant="top" src={book.img}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="primary">Read me!</Button>
      </Card.Body>
    </Card>
  )
}
    )
    )
}

export default AllTheBooks