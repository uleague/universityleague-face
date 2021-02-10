import React, { FC } from "react";
import { ReactComponent as Rocket } from "../images/rocket.svg";
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

export const Landing: FC = () => {
  return (
    <Container fluid className="pt-4">
      <Row>
        <Col>
          <Jumbotron >
            <h1>Дом студенческого киберспорта</h1>
            <p>
              Создаем возможности всем студентам соревноваться, расти профессионально и находить новых верных друзей.
            </p>
            <p>
              <Button variant="danger">Подробнее</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col>
        <Rocket />
        </Col>
      </Row>
    </Container>
  );
};
