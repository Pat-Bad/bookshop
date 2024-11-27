import { Card, Button } from "react-bootstrap";

const SingleBook = ({ title, img }) => {
	return (
		<Card className="my-2 align-items-center w-75">
			<Card.Img
				variant="top"
				src={img}
				alt={title}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Button variant="info">Read more...</Button>
			</Card.Body>
		</Card>
	);
};

export default SingleBook;
