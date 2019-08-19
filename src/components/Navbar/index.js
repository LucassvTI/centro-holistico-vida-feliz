import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import { Content } from './styles';

const NavigationBar = () => (
    <Content>
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand><Nav.Link href="/">Centro Holistico Vida Feliz</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/atividades"> Atividades </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/profissional"> Profissional </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/tecnicas"> Técnicas </Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contato"> Contato </Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Content>
);

export default NavigationBar;
