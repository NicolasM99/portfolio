import React, { useState } from "react";
import ROUTES from "../router/routes";
import { Row, Col, Image, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollWithOffset } from "../util/scrollWithOffset";
import { useTranslation } from "react-i18next";
import nmp from "../../assets/images/nicolas_moreno_posada.jpg";
import SocialMedia from "../components/SocialMedia/SocialMedia";

function HomeSection({ setCanHide }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  return (
    <>
      <Row id="home_section" className="general-section-container home">
        <Col lg={4} id="bio">
          <h1 id="home-greeting">{t("home.greetings")}</h1>
          <h1 id="home-name">{t("general.nicolas.moreno")}</h1>
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
          <div id="image-container">
            {/* <div className="cube rotate3d" id="solid-cube" />
            <div className="cube rotate3d" id="wired-cube" /> */}
            <Image
              id="nicolas-moreno-posada"
              src={nmp}
              alt="Nicolas Moreno Posada"
              className="rotate3d_gradient"
            />
          </div>

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
