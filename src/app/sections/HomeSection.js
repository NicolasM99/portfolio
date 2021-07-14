import React from "react";
import ROUTES from "../router/routes";
import {
  Row,
  Col,
  Image,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollWithOffset } from "../util/scrollWithOffset";
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
  return (
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
        <h4 className="font-weight-normal">Un gusto verte, soy</h4>
        <h1>Nicolás Moreno</h1>
        <h4>Ingeniero en Multimedia</h4>
        <p>Realizo herramientas y productos multimedia de alta calidad</p>
        <Link onClick={scrollWithOffset} to={"#" + ROUTES.PORTFOLIO}>
          Acerca de mí
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
            <Button variant="outline-primary">CV</Button>
          </div>
          <div>
            <Button variant="primary">Contacto</Button>
          </div>
        </Row>
      </Col>
    </Row>
  );
}

export default HomeSection;
