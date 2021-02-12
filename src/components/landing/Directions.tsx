import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GrGamepad, GrGroup, GrDeploy } from 'react-icons/gr';

import { LearnMoreCard } from '../LearnMoreCard'

export const Directions: FC = () => {
  return (
    <Row className="d-flex align-items-center mt-5">
        <Col xs="12">
            <h2 className="title-2 pl-5">Сферы деятельности</h2>
        </Col>
        <Col>
            <LearnMoreCard iconColorVar="sucess">
                <GrGamepad />
            </LearnMoreCard>
        </Col>
        <Col>
            <LearnMoreCard iconColorVar="info">
                <GrDeploy />
            </LearnMoreCard>
        </Col>
        <Col>
            <LearnMoreCard iconColorVar="warning">
                <GrGroup />
            </LearnMoreCard>
        </Col>
    </Row>
  );
};
