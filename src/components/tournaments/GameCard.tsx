import React, { FC } from "react";
import { Link } from 'react-router-dom';
import { Card, Modal, Button } from "react-bootstrap";
import { cx, css } from '@emotion/css/macro'
import "../../styles/tournaments.scss"

function MyVerticallyCenteredModal(props:any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Турниры появятся в ближайшем будущем
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Проводите лучшие киберспортивные турниры у себя в вузе?
          Попробуйте показать себя на новом межуниверситетском уровне. Подавайте заявку к нам в команду.  
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button href="https://forms.gle/xmpsEXUwEwLYBKp99" target="_blank">Подать заявку</Button>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export const GameCard: FC<{
  gameTitle: string;
  gameImage: any;
  cardLink?: string;
  active?: boolean;
}> = ({ gameTitle, gameImage, cardLink, active = false }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const activeStyles = css`
      ${active ? 'opacity: 0.9;' : 'opacity: 0.2;'}
    `;
  const activeClass = cx('card-image', activeStyles)
  return (
    <>
      <a
      style={{ cursor: 'pointer', textDecoration: 'none' }}
      className='d-flex flex-column'
      href={active ? cardLink : undefined}
      target='_blank'
      onClick={!active ? () => setModalShow(true) : () = {}}
      >
      <div>
        <Card className="mt-5 p-1 card-primary">
          <div className="card-image-box mb-3">
            <Card.Img className={activeClass} src={gameImage} style={{ borderRadius: "3px" }}/>
          </div>
          <Card.Title style={{ color: "#f4f4f4", textAlign: "center" }} className="card-title">{gameTitle}</Card.Title>
        </Card>
      </div>
      </a>
      <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  );
};
