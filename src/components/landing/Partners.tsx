import React, { FC } from "react";
import { Row, Col } from 'react-bootstrap';

import { ReactComponent as Logo } from '../../images/logo_sm.svg';
import vsuLogo from "../../images/vsuesportsblue.png"

export const Partners: FC = () => {
    return (
        <Row className="d-flex align-items-center mt-3">
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <Logo />
                <img style={{width: '70px', height: '70px'}} src={vsuLogo} alt="vsu"/>
            </Col>
        </Row>
    );
};