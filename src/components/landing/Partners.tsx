import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled/macro';

import { ReactComponent as Logo } from '../../images/logo_sm.svg';
import vsuLogo from '../../images/vsuesportsblue.png';
import gaugnLogo from '../../images/gaugn.png';

const PartnerLogo = styled.img`
  width: 70px;
  height: 70px;
`;

export const Partners: FC = () => {
  return (
    <Row className='d-flex align-items-center mt-3'>
      <Col className='d-flex align-items-center justify-content-center'>
        <Logo />
        <PartnerLogo src={gaugnLogo} alt='vsu' />
        <PartnerLogo src={vsuLogo} alt='vsu' />
      </Col>
    </Row>
  );
};
