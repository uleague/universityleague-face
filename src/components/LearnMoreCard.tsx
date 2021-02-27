import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export const LearnMoreCard: FC<{
  cardTitle: string;
  cardText: string;
  cardLink: string;
  footerColor: string;
}> = ({ cardTitle, cardText, cardLink, footerColor, children }) => {
  return (
    <Card bg="dark" text="light" className="mt-5">
      <Card.Header>{children}</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontWeight: "normal" }}>{cardTitle}</Card.Title>
        <Card.Text style={{ color: "#adb5bd", fontWeight: "lighter" }}>
          {cardText}
        </Card.Text>
        <a href={cardLink} style={{ color: "#c4c4c4" }}>
          <Card.Footer
            color={footerColor}
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            Узнать больше
            <FontAwesomeIcon
              className="ml-2"
              icon={faLongArrowAltRight}
              style={{ color: footerColor, height: "20px", width: "20px" }}
            />
          </Card.Footer>
        </a>
      </Card.Body>
    </Card>
  );
};
