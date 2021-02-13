import React, { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LearnMoreCard } from '../LearnMoreCard';
import { faGamepad, faUsers, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Directions: FC = () => {
  const [cards] = useState([
    {
      title: 'Соревнования',
      text: 'Турниры по ключевым и экспериментальным киберспортивным дисциплинам.',
      link: '',
      footerColor: '#37C794',
      icon: faGamepad,
    },
    {
      title: 'Профессия',
      text: 'Развитие профессиональных навыков и карьерные возможности для каждого студента.',
      link: '',
      footerColor: '#DC3545',
      icon: faPaperPlane,
    },
    {
      title: 'Дружественные связи',
      text: 'Возможности найти единомышленников, товарищей и близких друзей на всю жизнь.',
      link: '',
      footerColor: '#37A4C7',
      icon: faUsers,
    },
  ]);
  return (
    <Row className='d-flex align-items-center mt-5'>
      <Col xs='12'>
        <h2 className='title-2 pl-lg-5'>Сферы деятельности</h2>
      </Col>
      <Col xs="12" className="d-flex flex-wrap">
        {cards.map((card) => (
          <Col>
            <LearnMoreCard cardTitle={card.title} cardText={card.text} footerColor={card.footerColor}>
              <FontAwesomeIcon
                icon={card.icon}
                style={{ color: card.footerColor, height: '32px', width: '32px' }}
              />
            </LearnMoreCard>
          </Col>
        ))}
      </Col>
    </Row>
  );
};
