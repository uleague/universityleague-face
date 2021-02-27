import { Container, Col, Row } from "react-bootstrap";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Posts } from "../data/blog";
import "../styles/blog.scss";

export const Blog: FC = () => {
  let { blogSlug } = useParams<{ blogSlug: string }>();
  let post = Posts.filter((p) => p.slug === blogSlug)[0];
  return (
    <Container fluid="lg">
      <Row className="justify-content-center mb-4">
        <Col
          sm="10"
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={post.image_url}
            alt="article_img"
            style={{ height: "90%", width: "90%" }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="12">
          <h3
            className="text-center"
            style={{
              color: "#f4f4f4",
              fontFamily: "Bitter, serif",
              fontWeight: 500,
            }}
          >
            {post.title}
          </h3>
        </Col>
        <Col sm="8" className="mt-3">
          {post.body.map((txt) => (
            <p className="blog-body">{txt}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
