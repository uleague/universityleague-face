import React, { FC } from "react";
import { Card } from "react-bootstrap";
import dota2 from "../../images/dota2.png"

export const GameCard: FC<{
  gameTitle: string;
}> = ({ gameTitle }) => {
  return (
    <div>
      <Card text="light" className="mt-5 p-1 card-primary" style={{ }}>
        <Card.Img src={dota2} style={{ borderRadius: "3px" }}/>
      </Card>
    </div>
  );
};
