import React, { FC } from "react";
import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap";
import styled from '@emotion/styled/macro';
import "../../styles/tournaments.scss"


export const GameCard: FC<{
  gameTitle: string;
  gameImage: any;
  active?: boolean;
}> = ({ gameTitle, gameImage, active = false}) => {
  return (
    <Link
    to='#'
    style={{ cursor: 'pointer', textDecoration: 'none' }}
    className='d-flex flex-column'
    >
    <div>
      <Card className="mt-5 p-1 card-primary" style={{ }}>
        <div className="card-image-box mb-3">
          <Card.Img className="card-image" src={gameImage} style={{ borderRadius: "3px" }}/>
        </div>
        <Card.Title style={{ color: "#f4f4f4", textAlign: "center" }} className="card-title">{gameTitle}</Card.Title>
      </Card>
    </div>
    </Link>
  );
};
