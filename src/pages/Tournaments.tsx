import { faRoad } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { JumbotronBlock } from "../components/tournaments/JumbotronBlock";
import { GameCard } from "../components/tournaments/GameCard";

const games = [];

export const Tournaments: FC = () => {
  return (
    <div>
      <JumbotronBlock />
      <GameCard gameTitle="Dota 2" />
    </div>
  );
};
