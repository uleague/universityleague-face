import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export const LearnMoreCard: FC<{
  cardTitle: string;
  cardText: string;
  footerColor: string;
}> = ({ cardTitle, cardText, footerColor, children }) => {
  return (
    <Card bg="dark" text="light" className="mt-5">
      <Card.Header>{children}</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontWeight: "normal" }}>{cardTitle}</Card.Title>
        <Card.Text style={{ fontWeight: "lighter" }}>{cardText}</Card.Text>
        <Card.Footer
          color={footerColor}
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => {}}
        >
          Узнать больше
          <FontAwesomeIcon
            className="ml-2"
            icon={faLongArrowAltRight}
            style={{ color: footerColor, height: "20px", width: "20px" }}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
