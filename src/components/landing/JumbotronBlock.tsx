import React, { FC } from 'react';
import { ReactComponent as Rocket } from '../../images/rocket.svg';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


export const JumbotronBlock:FC = () => 
{
    return (
        <Row className="align-items-center">
            <Col>
            <Jumbotron className="pl-0" style={{ backgroundColor: "#292B36", color: "#f4f4f4"}}>
                <h1 className="mb-4">Дом студенческого киберспорта</h1>
                <p className="mb-5" style={{ color: '#adb5bd'}}>
                Создаем возможности всем студентам соревноваться, расти профессионально и находить новых верных друзей.
                </p>
                <p>
                <Button size="lg" variant="danger" href="/blogs/about_uleague">Подробнее</Button>
                </p>
            </Jumbotron>
            </Col>
            <Col xs={{ order: 'first', span: "12" }} lg={{ order: 'last'}}>
            <ResponsiveEmbed aspectRatio="4by3">
                <Rocket />
            </ResponsiveEmbed>
            </Col>
        </Row>
    )
};
