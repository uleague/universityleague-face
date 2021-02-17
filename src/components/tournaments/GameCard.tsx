import React, { FC } from "react";
import { Card } from "react-bootstrap";

export const GameCard: FC<{
  gameTitle: string;
}> = ({ gameTitle }) => {
  return (
    <div>
      <Card bg="dark" text="light" className="mt-5">
        <Card.Header>{gameTitle}</Card.Header>
      </Card>
    </div>
  );
};
