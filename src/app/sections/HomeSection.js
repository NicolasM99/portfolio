import React, { useState } from "react";
import ROUTES from "../router/routes";
import { Row, Col, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollWithOffset } from "../util/scrollWithOffset";
import { useTranslation } from "react-i18next";
import cube from "../../assets/images/cube.png";
import SocialMedia from "../components/SocialMedia/SocialMedia";

function HomeSection({ setCanHide }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  return (
    <>
      <Row
        className="general-section-container home"
        style={{
          position: "sticky",
          width: "100%",
          top: "0",
          zIndex: "0",
        }}
      >
        <Col lg={4} id="bio">
          <h4 className="font-weight-normal">{t("home.greetings")}</h4>
          <h1>{t("general.nicolas.moreno")}</h1>
          <h4>{t("general.multimedia.engineer")}</h4>
          <p>{t("home.description")}</p>
          <Link
            className="py-4"
            onClick={(el) => scrollWithOffset(el, setCanHide)}
            to={"#" + ROUTES.PORTFOLIO}
          >
            <i className="fa fa-chevron-down animate-up-and-down mr-2" />{" "}
            {t("home.about.me")}
          </Link>
        </Col>
        <Col lg={4} className="text-center">
          <Image id="cube-img" src={cube} alt="cube-img" />
          <SocialMedia />
          <Row className="home-buttons-container">
            <div>
              <Button variant="outline-primary">
                <i className="fa fa-cloud-download-alt mr-2" /> CV
              </Button>
            </div>
            <div>
              <Button onClick={handleShow} variant="primary">
                {t("home.contact")}
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomeSection;
