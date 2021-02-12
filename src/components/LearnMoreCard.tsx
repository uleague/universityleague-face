import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';

export const LearnMoreCard: FC<{
  iconColorVar: string;
}> = ({ iconColorVar, children }) => {
  return (
    <Card bg='dark'>
      <Card.Header>
        <IconContext.Provider value={{ color: iconColorVar, size: '50px' }}>
          {children}
        </IconContext.Provider>
      </Card.Header>
    </Card>
  );
};
