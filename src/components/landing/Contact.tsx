import React, { FC } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export const Contact: FC = () => {
  return (
    <Row className='d-flex align-items-center mt-5 flex-wrap'>
      <Col className='contact-card d-flex align-items-center flex-wrap m-auto p-5'>
        <Col xs='12' md='8' className='d-flex align-items-start flex-column p-3'>
          <h3 style={{ color: '#f4f4f4' }}>Станьте частью истории студенческого киберспорта</h3>
          <p style={{ color: '#f4f4f4', fontWeight: 'lighter' }}>
            Поделитесь с нами вашей уникальной киберспортивной историей и станьте вузом-партнером.
          </p>
        </Col>
        <Col className='d-flex align-items-center mb-3'>
          <Button size='lg' variant='danger' className='btn-contact m-auto'>
            Связаться
          </Button>
        </Col>
      </Col>
    </Row>
  );
};
