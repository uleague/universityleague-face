import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled/macro';

import vsuLogo from '../../images/vsuesportsblue.png';
import gaugnLogo from '../../images/gaugn.png';
import impulseLogo from '../../images/impulse.png'

const PartnerLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const Partners: FC = () => {
  return (
    <Row className='d-flex align-items-center mt-3'>
      <Col xs="12">
      </Col>
      <Col className='d-flex align-items-center justify-content-center'>
        <a href="https://vk.com/impulse_esport" target="_blank">
          <PartnerLogo className="mr-3 ml-3" src={impulseLogo} alt='impulse' />
        </a>
        <a href="https://vk.com/gaugncybersport" target="_blank">
          <PartnerLogo className="mr-3 ml-3" src={gaugnLogo} alt='gaugn' />
        </a>
        <a href="https://vk.com/vsuesports" target="_blank">
          <PartnerLogo className="mr-3 ml-3" src={vsuLogo} alt='vsu' />
        </a>
      </Col>
    </Row>
  );
};
