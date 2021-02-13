import styled from "@emotion/styled/macro";
import React, { FC } from "react";
import { CardDeck, Container } from "react-bootstrap";
import { BlogCard } from "../components/blog/BlogCard";
import { Divider } from "../components/Divider";

const BlogHeader = styled.h2`
  margin-right: 10px;
  margin-bottom: 40px;
  margin-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Blog: FC = () => {
  return (
    <Container fluid="lg" className="pt-4">
      <BlogHeader className="d-flex justify-content-center title-2">
        Последние
      </BlogHeader>
      <CardDeck>
        (
        {[...Array(3)].map(() => {
          return (
            <BlogCard
              tag="Esports"
              img="https://uleague-afishas.s3.eu-central-1.amazonaws.com/ul_tournament.png"
              title="Как собрать команду на турнир?"
            />
          );
        })}
        )
      </CardDeck>
      <Divider />
    </Container>
  );
};
