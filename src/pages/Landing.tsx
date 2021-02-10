import React, { FC } from "react";
import { ReactComponent as Rocket } from "../images/rocket.svg";
import { Container } from 'react-bootstrap';
import { JumbotronBlock } from '../components/landing/JumbotronBlock';
import { Partners } from '../components/landing/Partners';
import { Divider } from '../components/Divider';


export const Landing: FC = () => {
  return (
    <Container fluid className="pt-4">
      <JumbotronBlock />
      <Divider />
      <Partners />
      <Divider />
    </Container>
  );
};
