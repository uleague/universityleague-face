import { faRoad } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { Container, Row, CardGroup, Card } from "react-bootstrap";
import { JumbotronBlock } from "../components/tournaments/JumbotronBlock";
import { GameCard } from "../components/tournaments/GameCard";

const games = [];

export const Tournaments: FC = () => {
  return (
    <div>
      <JumbotronBlock />
      <Container fluid="lg">
        <h2 className="text-center" style={{ color: "#f4f4f4" }}>
          Официальные дисциплины ULeague
        </h2>
        <Row>
          <CardGroup>
            <GameCard gameTitle="Dota 2" />
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};
