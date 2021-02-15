import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faVk,
  faTwitch,
  faTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { Divider } from "./Divider";
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
            <Nav.Link as={Link} to="/">
              <span className="navItemFooter">Главная</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/tournaments">
              <span className="navItemFooter">Турниры</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              <span className="navItemFooter">Блог</span>
            </Nav.Link>
            <Nav.Link target="_blank" href="mailto:help@universityleague.ru">
              <span className="navItemFooter">Поддержка</span>
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://disk.yandex.ru/i/3ZjBriky9MUF0w"
            >
              <span className="navItemFooter">Условия использования</span>
            </Nav.Link>
          </Nav>
        </Row>
        <Divider />
        <Row>
          <Col className="ml-auto">
            <p
              style={{
                fontWeight: "lighter",
                fontSize: "small",
                color: "#f4f4f4",
              }}
              className="d-flex align-items-center"
            >
              <FontAwesomeIcon
                icon={faCopyright}
                style={{ color: "#f4f4f4", height: "10px", width: "10px" }}
                className="mr-2"
              />{" "}
              2021 ULeague
            </p>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Nav.Link target="_blank" href="https://twitch.com/u_league">
              <FontAwesomeIcon className="navItemFooter" icon={faTwitch} />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://vk.com/u_league">
              <FontAwesomeIcon className="navItemFooter" icon={faVk} />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://twitter.com/uleague_ru">
              <FontAwesomeIcon className="navItemFooter" icon={faTwitter} />
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.youtube.com/channel/UCjqxc1BpJzOby0AlR0FO8iQ"
            >
              <FontAwesomeIcon className="navItemFooter" icon={faYoutube} />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://discord.com/invite/GTDHJsP">
              <FontAwesomeIcon className="navItemFooter" icon={faDiscord} />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
