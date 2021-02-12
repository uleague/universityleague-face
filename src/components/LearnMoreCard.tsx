import React, { FC } from "react";
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { GrGamepad } from 'react-icons/gr';

export const LearnMoreCard: FC = () => {
  return (
    <Card bg="dark">
        <Card.Header>
            <IconContext.Provider value={{ color: 'sucess', size: '50px' }} >
                <GrGamepad />
            </IconContext.Provider>
        </Card.Header>
    </Card>
  );
};
