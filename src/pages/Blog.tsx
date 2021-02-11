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
        <BlogCard
          tag="Esports"
          img="https://assets-global.website-files.com/5cdadb92bbedfa7aa28f9b50/601da29256675b443d75aeaa_the-commons-20210205_opt.jpg"
          title="How to Learn Front-End Web Development"
        />
        <BlogCard
          tag="Esports"
          img="https://assets-global.website-files.com/5cdadb92bbedfa7aa28f9b50/601da29256675b443d75aeaa_the-commons-20210205_opt.jpg"
          title="How to Learn Front-End Web Development"
        />
        <BlogCard
          tag="Esports"
          img="https://assets-global.website-files.com/5cdadb92bbedfa7aa28f9b50/601da29256675b443d75aeaa_the-commons-20210205_opt.jpg"
          title="How to Learn Front-End Web Development"
        />
      </CardDeck>
      <Divider />
    </Container>
  );
};
