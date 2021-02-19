import React, { FC } from "react";
import { Container, Row, CardDeck, Col } from "react-bootstrap";
import { JumbotronBlock } from "../components/tournaments/JumbotronBlock";
import { GameCard } from "../components/tournaments/GameCard";
import dota2 from "../images/dota2.png";
import csgo from "../images/csgo.jpg";
import hs from "../images/hs.jpg";

const games = [];

export const Tournaments: FC = () => {
  return (
    <div>
      <JumbotronBlock />
      <Container fluid="lg" className="mt-5">
        <h2 className="text-center" style={{ color: "#f4f4f4" }}>
          Официальные дисциплины ULeague
        </h2>
        <Row>
          <CardDeck className="d-flex m-auto">
            <GameCard gameTitle="Dota 2" gameImage={dota2} active />
            <GameCard gameTitle="CS:GO" gameImage={csgo} />
            <GameCard gameTitle="Hearthstone" gameImage={hs} />
          </CardDeck>
        </Row>
        <Row className="mt-5">
          <Col xs="12">
            <h2 className="text-center" style={{ color: "#f4f4f4" }}>
              Присоединяйся к команде организаторов
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
