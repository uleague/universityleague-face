import React, { FC } from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

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
  tag: string;
  img: string;
  title: string;
}> = ({ tag, img, title }) => {
  return (
    <Col md="4" sm="12" className="d-flex justify-content-center">
      <Link
        to='#'
        style={{ cursor: 'pointer', textDecoration: 'none' }}
        className='d-flex flex-column justify-content-start pb-4'
      >
        <Card style={{ backgroundColor: '#292B36', border: 'none' }}>
          {tag && <CardTag style={{ color: '#37C794', fontWeight: 300 }}>{tag}</CardTag>}
          <Card.Img variant='top' src={img} style={{ height: '250px', borderRadius: '20px' }} />
          <CardTitle style={{ fontFamily: "Noto Serif, serif", color: "#f4f4f4" }}>{title}</CardTitle>
        </Card>
      </Link>
    </Col>
  );
};
