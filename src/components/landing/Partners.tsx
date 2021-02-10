import React, { FC } from "react";
import { Row, Col } from 'react-bootstrap';
import { Divider } from '../Divider'

import { ReactComponent as Logo } from '../../images/logo_sm.svg';

export const Partners: FC = () => {
    return (
        <Row className="d-flex align-items-center mt-5">
            <Divider />
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Logo />
            </Col>
            <Divider />
        </Row>
    );
};