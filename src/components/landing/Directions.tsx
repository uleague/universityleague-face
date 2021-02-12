import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LearnMoreCard } from '../LearnMoreCard';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export const Directions: FC = () => {
  return (
    <Row className='d-flex align-items-center mt-5'>
      <Col xs='12'>
        <h2 className='title-2 pl-5'>Сферы деятельности</h2>
      </Col>
      <Col>
        <LearnMoreCard>
          <FontAwesomeIcon icon={faGamepad} style={{ color: 'white' }} />
        </LearnMoreCard>
      </Col>
      <Col>
        <LearnMoreCard></LearnMoreCard>
      </Col>
      <Col>
        <LearnMoreCard></LearnMoreCard>
      </Col>
    </Row>
  );
};
