import React, { FC } from "react";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as Logo } from '../images/logo_sm.svg';

export const Header: FC = () => {
	return (
	<header>
        <Navbar bg='dark' variant='dark' expand="lg">
          <Container>
            <Row noGutters className="position-relative w-100 align-items-center">
              <Col className="d-flex justify-content-start align-items-center">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                  <Logo/>{' '}
                  ULEAGUE
                </Navbar.Brand>
              </Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto" navbar>
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/tournaments">Турниры</Nav.Link>
                    <Nav.Link href="/news">Новости</Nav.Link>
                    <Nav.Link href="/blog">Блог</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
      </header>
	);
  };
