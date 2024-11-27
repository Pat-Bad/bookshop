import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import CustomNavBar from "./components/CustomNavBar";
import MyAlert from "./components/MyAlert";

import { Container, Row } from "react-bootstrap";

import BookList from "./components/BookList";

function App() {
	return (
		<div className="App min-vh-100">
			<header>
				<CustomNavBar />
			</header>
			<main>
				<MyAlert />
				<Container fluid>
					<Row>
						<BookList />
					</Row>
				</Container>
			</main>
			<footer className="mt-auto">
				<MyFooter />
			</footer>
		</div>
	);
}

export default App;
