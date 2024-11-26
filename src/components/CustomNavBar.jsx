import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const CustomNavBar = function () {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="bg-secondary container-fluid justify-content-start"
			data-bs-theme="dark"
		>
			<Container>
				<Navbar.Brand href="#home">Patricia's Bookshop</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Home</Nav.Link>
						<Nav.Link href="#pricing">About</Nav.Link>
						<NavDropdown
							title="Browse"
							id="collapsible-nav-dropdown"
						>
							<NavDropdown.Item href="#action/3.1">Favs</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Shop</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavBar;
