import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import CustomNavBar from "./components/CustomNavBar";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";
import { Container, Row, Col} from "react-bootstrap";



function App() {
	return (
		<div className="App">
			<header>
				<CustomNavBar/>
			</header>
      <main>
        <MyAlert name="Stefano"/>
        <Container fluid>
          <Row className="justify-content-start">
            <Col xs={12} md={6} lg={4}
            className="d-flex justify-content-around flex-wrap">
            <AllTheBooks/></Col>
          </Row>
        </Container>
      </main>
      <footer className="position-absolute top-100 container-fluid p-0">
        <MyFooter />
      </footer>
		</div>
	);
}

export default App;
