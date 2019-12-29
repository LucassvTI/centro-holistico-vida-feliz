import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

import { Content } from './styles';

const NavigationBar = () => (
    <Content>
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand><Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/">Centro Holistico Vida Feliz</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Link className="nav-link" data-toggle="collapse" onClick={() => window.scrollTo(0, 0)} to="/">Home</Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/atividades"> Atividades </Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/profissional"> Profissional </Link></Nav.Item>
                        <Nav.Item><Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/tecnicas"> Técnicas </Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Content>
);

export default NavigationBar;
