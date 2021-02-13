import React, { FC } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faVk, faTwitch, faTwitter, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';

import { Divider } from "./Divider"
import { ReactComponent as Logo } from "../images/logo_sm.svg";

export const Footer: FC = () => {
  return (
    <footer>
        <Container className="mt-5 p-3">
            <Row className="mt-2">
                <Col xs="12" className="d-flex justify-content-center">
                    <Logo />
                    <h2 style={{ color: "#f4f4f4", fontWeight: "bold" }}>ULEAGUE</h2>
                </Col>
            </Row>
            <Row className="mt-1">
                <Nav className="m-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/tournaments">Турниры</Nav.Link>
                    <Nav.Link href="/news">Новости</Nav.Link>
                    <Nav.Link href="/blog">Блог</Nav.Link>
                    <Nav.Link href="mailto:help@universityleague.ru">Поддержка</Nav.Link>
                    <Nav.Link href="https://disk.yandex.ru/i/3ZjBriky9MUF0w">Условия использования</Nav.Link>
                </Nav>
            </Row>
            <Divider />
            <Row>
                <Col className="ml-auto">
                    <p style={{ fontWeight: "lighter", fontSize: "small", color: "#f4f4f4"}} className="d-flex align-items-center">
                        <FontAwesomeIcon icon={faCopyright} style={{ color: "#f4f4f4", height: '10px', width: '10px' }} className="mr-2"/> 2021 ULeague
                    </p>
                </Col>
                <Col className="d-flex align-items-center justify-content-end">
                    <Nav.Link target="_blank" href="https://twitch.com/u_league"><FontAwesomeIcon icon={faTwitch} /></Nav.Link>
                    <Nav.Link target="_blank" href="https://vk.com/u_league"><FontAwesomeIcon icon={faVk} /></Nav.Link>
                    <Nav.Link target="_blank" href="https://twitter.com/uleague_ru"><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                    <Nav.Link target="_blank" href="https://www.youtube.com/channel/UCjqxc1BpJzOby0AlR0FO8iQ"><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
                    <Nav.Link target="_blank" href="https://discord.com/invite/GTDHJsP"><FontAwesomeIcon icon={faDiscord} /></Nav.Link>
                </Col>
            </Row>
        </Container>
    </footer>
  );
};