import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav({filterValue, setFilterValue}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">FunnyBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className='formContainer'>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Find your new favourite book!"
                                name='filterValue'
                                // evento per aggiornare il valore del campo di testo con quello che è stato
                                // intercettato dall'evento (ciò che ha digitato l'utente)
                                onChange={(event) => setFilterValue(event.target.value)}
                                value={filterValue} />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </Navbar>
    );
}

export default MyNav
    ;