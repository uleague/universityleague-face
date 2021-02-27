import React, { FC } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import "../../styles/tournaments.scss"

export const CTAJoinTeam:FC = () => 
{
    return (
        <div>
            <Jumbotron className="p-5 d-flex flex-column cta-jumbo">
                <h1 className="mb-2 text-center" style={{ color: "#f4f4f4" }}><span style={{ color: "rgb(223 205 103)" }}>Присоединяйся</span> к нашей команде</h1>
                <p className="mb-4 text-center" style={{ color: '#adb5bd'}}>
                Получи практический опыт работы в киберспортивной индустрии, знания от каждого члена команды ULeague.
                </p>
                <p className="m-auto pt-2">
                    <Button variant="info" size="lg" href="https://forms.gle/xmpsEXUwEwLYBKp99">Присоединиться</Button>
                </p>
            </Jumbotron>
        </div>
    )
};
