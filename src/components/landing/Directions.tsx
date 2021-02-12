import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LearnMoreCard } from '../LearnMoreCard';
import { faGamepad, faUsers, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cards = {
    compete: {
        title: "Соревнования",
        text: "Турниры по ключевым и экспериментальным киберспортивным дисциплинам.",
        link: "",
        footerColor: "#37C794",
    },
    career: {
        title: "Профессия",
        text: "Развитие профессиональных навыков и карьерные возможности для каждого студента.",
        link: "",
        footerColor: "#DC3545",
    },
    friendship: {
        title: "Дружественные связи",
        text: "Возможности найти единомышленников, товарищей и близких друзей на всю жизнь.",
        link: "",
        footerColor: "#37A4C7",
    }
}

export const Directions: FC = () => {
  return (
    <Row className='d-flex align-items-center mt-5'>
      <Col xs='12'>
        <h2 className='title-2 pl-lg-5'>Сферы деятельности</h2>
      </Col>
      <Col>
        <LearnMoreCard cardTitle={cards.compete.title} cardText={cards.compete.text} footerColor={cards.compete.footerColor}>
          <FontAwesomeIcon icon={faGamepad} style={{ color: '#37C794', height: '32px', width: '32px' }} />
        </LearnMoreCard>
      </Col>
      <Col>
        <LearnMoreCard cardTitle={cards.career.title} cardText={cards.career.text} footerColor={cards.career.footerColor}>
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#DC3545', height: '32px', width: '32px' }} />
        </LearnMoreCard>
      </Col>
      <Col>
        <LearnMoreCard cardTitle={cards.friendship.title} cardText={cards.friendship.text} footerColor={cards.friendship.footerColor}>
            <FontAwesomeIcon icon={faUsers} style={{ color: '#37A4C7', height: '32px', width: '32px' }} />
        </LearnMoreCard>
      </Col>
    </Row>
  );
};
