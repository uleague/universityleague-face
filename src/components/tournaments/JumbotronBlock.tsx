import React, { FC } from 'react';
import { ReactComponent as Rocket } from '../../images/rocket.svg';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


export const JumbotronBlock:FC = () => 
{
    return (
        <Row className="align-items-center">
            <Col>
            <Jumbotron className="text-center p-5" style={{ backgroundColor: "#1b1f24" }}>
                <h1 className="">Дом студенческого киберспорта</h1>
                <p className="" style={{ color: '#adb5bd'}}>
                Создаем возможности всем студентам соревноваться, расти профессионально и находить новых верных друзей.
                </p>
            </Jumbotron>
            </Col>
            {/* <Col xs={{ order: 'first', span: "12" }} lg={{ order: 'last'}}> */}
            {/* <ResponsiveEmbed aspectRatio="4by3">
                <Rocket />
            </ResponsiveEmbed> */}
            {/* </Col> */}
        </Row>
    )
};
