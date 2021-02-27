import React, { FC } from 'react';
import { CardDeck, Container, Row } from 'react-bootstrap';
import { BlogCard } from '../components/blog/BlogCard';
import { Divider } from '../components/Divider';
import styled from '@emotion/styled/macro';
import { Posts } from '../data/blog';

const BlogHeader = styled.h2`
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  padding-top: 50px;
  padding-bottom: 10px;
  font-weight: 400;
  font-family: 'Bitter', serif;
`;

export const Blogs: FC = () => {
  return (
    <Container fluid='lg' className='pt-4'>
      <h1
        style={{
          color: '#f4f4f4',
          fontSize: 'sm',
          fontFamily: 'Bitter, serif',
        }}
        className='text-center mb-4 mt-3'
      >
        Записки интересных людей
      </h1>
      <Divider />
      <BlogHeader className='d-flex justify-content-center title-2'>Последние</BlogHeader>
      <Row>
        <CardDeck className='m-auto'>
          {Posts.map((post) => {
            return (
              <BlogCard slug={post.slug} tag={post.tag} img={post.image_url} title={post.title} />
            );
          })}
        </CardDeck>
      </Row>
      <Divider />
    </Container>
  );
};
