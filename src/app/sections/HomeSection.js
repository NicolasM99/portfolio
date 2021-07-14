import React, { useState, useRef } from "react";
import ROUTES from "../router/routes";
import {
  Row,
  Col,
  Image,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";

const social_media = [
  {
    name: "Behance",
    icon: "behance-square",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    icon: "github-square",
  },
  {
    name: "Instagram",
    icon: "instagram-square",
  },
];

const renderTooltip = (props, label) => (
  <Tooltip id="button-tooltip" {...props}>
    {label}
  </Tooltip>
);

function HomeSection(props) {
  return (
    <Row id={ROUTES.HOME} className="general-section-container">
      <Col lg={4}>
        <h3 className="font-weight-normal">Un gusto verte, soy</h3>
        <h1>Nicolás Moreno</h1>
        <h3>Ingeniero en Multimedia</h3>
        <p>Realizo herramientas y productos multimedia de alta calidad</p>
        <a href="#">Acerca de mí</a>
      </Col>
      <Col lg={4} className="text-center">
        <Image
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
                <a ref={ref} {...triggerHandler} href="#" key={idx}>
                  <i
                    className={`fab fa-${item.icon} fa-2x social-media-icon`}
                  />
                </a>
              )}
            </OverlayTrigger>
          ))}
        </Row>
        <Row className="home-buttons-container">
          <Button variant="outline-primary">CV</Button>
          <Button variant="primary">Contacto</Button>
        </Row>
      </Col>
    </Row>
  );
}

export default HomeSection;
