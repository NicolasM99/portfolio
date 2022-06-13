import React from "react";
import ROUTES from "../router/routes.json";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollWithOffset } from "../util/scrollWithOffset";
import { useTranslation } from "react-i18next";
import nmp from "../../assets/images/nicolas_moreno_posada.png";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import cv from "../../assets/documents/cv_nicolas_moreno.pdf";
function HomeSection({ setCanHide, handleShowContactModal }) {
  const { t } = useTranslation();
  return (
    <>
      <Row id="home_section" className="general-section-container home">
        <Col lg={4} id="bio">
          <h1 data-aos="fade-up" id="home-greeting">
            {t("home.greetings")}
          </h1>
          <h1 data-aos="fade-up" data-aos-delay="100" id="home-name">
            {t("general.nicolas.moreno")}
          </h1>
          <h4 data-aos="fade-up" data-aos-delay="200">
            {t("general.multimedia.engineer")}
          </h4>
          <p data-aos="fade-up" data-aos-delay="300">
            {t("home.description")}
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <Link
              className="py-4"
              onClick={(el) => scrollWithOffset(el, setCanHide)}
              to={"#" + ROUTES.PORTFOLIO}
            >
              <i className="fa fa-chevron-down animate-up-and-down mr-2" />
              {t("home.about.me")}
            </Link>
          </div>
        </Col>
        <Col
          lg={4}
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center"
        >
          <div id="image-container">
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
              <a href={cv} download="Nicolas_Moreno_CV.pdf">
                <Button variant="outline-primary">
                  <i className="fa fa-cloud-download-alt" />
                  {t("general.cv")}
                </Button>
              </a>
            </div>
            <div>
              <Button onClick={handleShowContactModal} variant="primary">
                <i className="fa fa-phone-alt" />
                {t("home.contact")}
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default HomeSection;
