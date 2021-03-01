import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { Divider } from "../components/Divider";
import { JumbotronBlock } from "../components/landing/JumbotronBlock";
import { Partners } from "../components/landing/Partners";
import { Directions } from "../components/landing/Directions";
import { Contact } from "../components/landing/Contact";

export const Landing: FC = () => {
  return (
    <Container fluid="lg" className="pt-4">
      <JumbotronBlock />
      <h2 className="text-center mb-4 mt-3" style={{ color: "#f4f4f4" }}>
        Вузы-партнеры
      </h2>
      <Divider />
      <Partners />
      <Divider />
      <Directions />
      <Contact />
    </Container>
  );
};
