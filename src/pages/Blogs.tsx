import React, { FC } from "react";
import { CardDeck, Container, Row, Col } from "react-bootstrap";
import { BlogCard } from "../components/blog/BlogCard";
import { Divider } from "../components/Divider";
import styled from "@emotion/styled/macro";

const BlogHeader = styled.h2`
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  padding-top: 50px;
  padding-bottom: 10px;
  font-weight: 100;
  font-family: "Noto Serif", serif;
`;

export const Blogs: FC = () => {
  return (
    <Container fluid="lg" className="pt-4">
      <h1
        style={{
          color: "#f4f4f4",
          fontSize: "sm",
          fontFamily: "Noto Serif, serif",
        }}
        className="text-center mb-4 mt-3"
      >
        Записки интересных людей
      </h1>
      <Divider />
      <BlogHeader className="d-flex justify-content-center title-2">
        Последние
      </BlogHeader>
      <Row>
        <CardDeck className="m-auto">
          {[...Array(3)].map(() => {
            return (
              <BlogCard
                tag="Esports"
                img="https://uleague-afishas.s3.eu-central-1.amazonaws.com/ul_tournament.png"
                title="Как собрать команду на турнир?"
              />
            );
          })}
        </CardDeck>
      </Row>
      <Divider />
    </Container>
  );
};
