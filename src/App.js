import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import CustomNavBar from "./components/CustomNavBar";
import MyAlert from "./components/MyAlert";
import AllTheBooks from "./components/AllTheBooks";
import { Container, Row} from "react-bootstrap";



function App() {
	return (
		<div className="App min-vh-100">
			<header>
				<CustomNavBar/>
			</header>
      <main>
        <MyAlert name="Stefano"/>
        <Container fluid>
          <Row>
       
            <AllTheBooks/>
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
