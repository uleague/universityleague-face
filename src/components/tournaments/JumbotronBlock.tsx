import React, { FC } from 'react';
import { Jumbotron } from 'react-bootstrap';
import compete from "../../images/compete.png"


export const JumbotronBlock:FC = () => 
{
    return (
        <div>
            <Jumbotron className="p-5 d-flex flex-column" style={{ backgroundColor: "#1b1f24", backgroundImage: `url(${compete})`, backgroundSize: "cover", height: "35vh", backgroundPosition: "50% 50%" }}>
                <h1 className="mb-4 mt-5" style={{ color: "#f4f4f4" }}><span style={{ color: "#37C794" }}>Соревнуйся</span> на равных</h1>
                <p style={{ color: '#adb5bd'}}>
                Участвуй в турнирах, попадай в рейтинг и становись лучшим в своей дисциплине.
                </p>
            </Jumbotron>
        </div>
    )
};
