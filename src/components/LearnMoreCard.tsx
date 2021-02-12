import React, { FC } from "react";
import { Card } from "react-bootstrap";

export const LearnMoreCard: FC = ({ children }) => {
  return (
    <Card bg="dark">
      <Card.Header>{children}</Card.Header>
    </Card>
  );
};
