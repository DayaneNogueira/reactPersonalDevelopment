import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './components/Header.js';

const navbarStyle = {
    backgroundColor: 'blue',
};

function Header() {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} style={navbarStyle}>
                    <Container fluid>
                        <Navbar.Brand href="#" style={{ color: 'rgb(220, 220, 220)', }} >Desenvolvimento Pessoal</Navbar.Brand>
                        <Navbar.Toggle className='border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: 'grey', }}/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Desenvolvimento Pessoal
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Início</Nav.Link>
                                    <Nav.Link href="https://github.com/DayaneNogueira/reactPersonalDevelopment.git" target="_blank">Código Fonte</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header;