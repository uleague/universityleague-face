import { Container, Col, Row } from "react-bootstrap";
import React, { FC } from "react";
import {
  useParams,
  Switch,
  Route
} from "react-router-dom";


export const Blog: FC = () => {
  let { blogId } = useParams();
  return (
    <Container fluid="lg" className="pt-4">
      <Row>
        {blogId}
      </Row>
    </Container>
  );
};
