import React, { FC } from "react";
import { Container, Row, CardDeck, Col, Jumbotron } from "react-bootstrap";
import { JumbotronBlock } from "../components/tournaments/JumbotronBlock";
import { GameCard } from "../components/tournaments/GameCard";
import { CTAJoinTeam } from "../components/tournaments/CTAJoinTeam";
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
          <CardDeck className="d-flex m-auto justify-content-center flex-wrap">
            <GameCard
              gameTitle="Dota 2"
              gameImage={dota2}
              cardLink="https://www.uleague.ru"
              active
            />
            <GameCard gameTitle="CS:GO" gameImage={csgo} />
            <GameCard gameTitle="Hearthstone" gameImage={hs} />
          </CardDeck>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <CTAJoinTeam />
        </Row>
      </Container>
    </div>
  );
};
