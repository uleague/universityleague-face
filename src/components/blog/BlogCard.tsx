import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled/macro';

const CardTag = styled.h5`
  margin-left: 10px;
  color: white;
`;

const CardTitle = styled.h4`
  margin-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const BlogCard: FC<{
  tag: string;
  img: string;
  title: string;
}> = ({ tag, img, title }) => {
  return (
    <div className='d-flex flex-column justify-content-start col-4'>
      <Card style={{ backgroundColor: '#292B36', border: 'none' }}>
        {tag && <CardTag>{tag}</CardTag>}
        <Card.Img variant='top' src={img} style={{ height: '250px', borderRadius: '20px' }} />
        <CardTitle>{title}</CardTitle>
      </Card>
    </div>
  );
};
