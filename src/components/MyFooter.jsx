import ListGroup from 'react-bootstrap/ListGroup';

function MyFooter() {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item className="bg-secondary">Home</ListGroup.Item>
      <ListGroup.Item className="bg-secondary">Contact Us</ListGroup.Item>
      <ListGroup.Item className="bg-secondary">Where we are</ListGroup.Item>
      <ListGroup.Item className="bg-secondary">Legal notes</ListGroup.Item>
    </ListGroup>
  );
}

export default MyFooter;