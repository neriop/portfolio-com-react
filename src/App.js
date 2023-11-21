import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#welcome-section" style={{ color: "lightgrey" }}>Página de Portfólio Pessoal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto">
                <Nav.Link href="#welcome-section" style={{ color: "lightgrey" }}>Sobre</Nav.Link>
                <Nav.Link href="#projects" style={{ color: "lightgrey" }}>Trabalhos</Nav.Link>
                <Nav.Link href="#contacts" style={{ color: "lightgrey" }}>Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container id="welcome-section" className="welcome-section text-center">
          <h1>Olá, it's this neriop equip</h1>
          <p>Estudante de ciência da computação</p>
        </Container>

        <Container id="projects" className="projects text-center">
          <h2>Esses são alguns Projetos</h2>
          <Row>
            <Col md={6}>
              <Card>
                <a href="https://github.com/neriop/formulario-pesquisa" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="https://drive.google.com/file/d/1NWYQwx7JLC62sKUrGAUv8cQe3-ZsV2Ap/view?usp=sharing" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>Formulário de Pesquisa</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <a href="https://github.com/neriop/pagina-produto" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="https://drive.google.com/file/d/1zWHy4sIJv0e4AnEOVdVTv7iAyPoBLq-V/view?usp=sharing" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>Página de Produto</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container id="contacts" className="contacts text-center">
          <div>
            <h2>Vamos trabalhar juntos...</h2>
            <p>Gostaria de mais alguma coisa?</p>
          </div>
          <div>
            <h2>Contato:</h2>
            <div className="student-contact">
              <a href="https://github.com/neriop" target="_blank" rel="noopener noreferrer">
                Github - Neri
              </a>
            </div>            
          </div>
        </Container>
      </div>
    );
  }
}

export default Portfolio;