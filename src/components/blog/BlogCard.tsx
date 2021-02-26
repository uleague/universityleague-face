import React, { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import "../../styles/blog.scss"

const CardTag = styled.h5`
  margin-left: 10px;
  color: white;
  text-decoration: none;
`;

const CardTitle = styled.h4`
  margin-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

export const BlogCard: FC<{
  slug: string;
  tag: string;
  img: string;
  title: string;
}> = ({ slug, tag, img, title }) => {
  return (
    <Col md="4" sm="12" className="d-flex justify-content-center">
      <Link
        to={`blogs/${slug}`}
        style={{ cursor: 'pointer', textDecoration: 'none' }}
        className='d-flex flex-column justify-content-start pb-4'
      >
        <Card className="p-2" bsPrefix="card-blog" style={{ backgroundColor: '#292B36', border: 'none' }}>
          {tag && <CardTag className="card-tag" style={{ fontWeight: 300 }}>{tag}</CardTag>}
          <Card.Img variant='top' src={img} style={{ height: '200px', borderRadius: '20px' }} />
          <CardTitle style={{ fontFamily: "Noto Serif, serif", color: "#f4f4f4" }}>{title}</CardTitle>
        </Card>
      </Link>
    </Col>
  );
};
