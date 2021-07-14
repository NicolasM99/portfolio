import React, { useState } from "react";
import ROUTES from "../router/routes";
import {
  Row,
  Col,
  Image,
  Tooltip,
  OverlayTrigger,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollWithOffset } from "../util/scrollWithOffset";
import { useTranslation } from "react-i18next";
const social_media = [
  {
    name: "Behance",
    icon: "behance-square",
    link: "https://www.behance.net/nicolasmoreno99",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nicolas-moreno-posada/",
  },
  {
    name: "GitHub",
    icon: "github-square",
    link: "https://github.com/NicolasM99",
  },
  {
    name: "Instagram",
    icon: "instagram-square",
    link: "",
  },
];

const renderTooltip = (props, label) => (
  <Tooltip id="button-tooltip" {...props}>
    {label}
  </Tooltip>
);

function HomeSection(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t } = useTranslation();
  return (
    <>
      <Row
        // id={ROUTES.HOME}
        className="general-section-container home"
        style={{
          position: "sticky",
          width: "100%",
          top: "0",
          backgroundColor: "rgba(0,0,0,0.06)",
          zIndex: "0",
        }}
      >
        <Col lg={4}>
          <h4 className="font-weight-normal">{t("home.greetings")}</h4>
          <h1>{t("general.nicolas.moreno")}</h1>
          <h4>{t("general.multimedia.engineer")}</h4>
          <p>{t("home.description")}</p>
          <Link onClick={scrollWithOffset} to={"#" + ROUTES.PORTFOLIO}>
            <i className="fa fa-chevron-down animate-up-and-down mr-2" />{" "}
            {t("home.about.me")}
          </Link>
        </Col>
        <Col lg={4} className="text-center">
          <Image
            id="cube-img"
            src="https://www.freeiconspng.com/thumbs/3d-cube-png/3d-cube-png-transparent-image-11.png"
            alt="cube-img"
          />
          <Row className="social-media-icon-container">
            {social_media.map((item, idx) => (
              <OverlayTrigger
                key={idx}
                placement="bottom"
                delay={{ show: 250, hide: 200 }}
                overlay={(props) => renderTooltip(props, item.name)}
              >
                {({ ref, ...triggerHandler }) => (
                  <a
                    ref={ref}
                    {...triggerHandler}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                  >
                    <i
                      className={`fab fa-${item.icon} fa-2x social-media-icon`}
                    />
                  </a>
                )}
              </OverlayTrigger>
            ))}
          </Row>
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
