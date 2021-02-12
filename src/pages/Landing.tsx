import React, { FC } from "react";
import { ReactComponent as Rocket } from "../images/rocket.svg";
import { Container } from "react-bootstrap";
import { Divider } from "../components/Divider";
import { JumbotronBlock } from "../components/landing/JumbotronBlock";
import { Partners } from "../components/landing/Partners";
import { Directions } from "../components/landing/Directions"

export const Landing: FC = () => {
  return (
    <Container fluid="lg" className="pt-4">
      <JumbotronBlock />
      <Divider />
      <Partners />
      <Divider />
      <Directions />
    </Container>
  );
};
