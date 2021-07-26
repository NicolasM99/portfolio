import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import ROUTES from "../router/routes.json";
import nicolas_landscape from "../../assets/images/nicolas_landscape.jpg";
import personalInfo from "../util/personalInfo.json";
import cv from "../../assets/documents/cv_nicolas_moreno.pdf";

const listPersonalInfo = [
  {
    icon: "fa fa-user",
    label: personalInfo.full_name,
  },
  {
    icon: "fa fa-phone-alt",
    label: personalInfo.phone,
  },
  {
    icon: "fa fa-envelope",
    label: personalInfo.email,
  },
  {
    icon: "fa fa-map-marker-alt",
    label: personalInfo.location,
  },
  {
    icon: "fa fa-birthday-cake",
    label: personalInfo.birthday,
  },
];

function AboutSection() {
  const { t, i18n } = useTranslation();

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString(i18n.language, {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });

  const calculateYears = (dateString) =>
    new Date(new Date() - new Date(dateString)).getFullYear() - 1970;

  const Content = () => (
    <div className="small-section">
      <h2>{t("general.about.title")}</h2>
      <Row id="about-wrapper" className="mt-5 ">
        <Col id="info-container" md={6}>
          <div id="info-image-container">
            <Image
              fluid
              src={nicolas_landscape}
              alt="Nicolás Moreno Posada landscape"
            />
          </div>

          <div id="personal-info" className="w-100">
            {listPersonalInfo.map((item, idx) => (
              <p key={idx}>
                <i className={item.icon + " mr-2"} />
                {item.label === personalInfo.birthday
                  ? `${formatDate(item.label)} (${calculateYears(
                      item.label
                    )} ${t("about.years")})`
                  : item.label}
              </p>
            ))}
          </div>
        </Col>
        <Col md={6}>
          <p id="about-description">{t("about.description")}</p>
          <a href={cv} download="Nicolas_Moreno_CV.pdf">
            <Button>
              <i className="fa fa-cloud-download-alt" />
              {t("general.cv")}
            </Button>
          </a>
        </Col>
      </Row>
    </div>
  );
  return <GeneralSection _id={ROUTES.ABOUT} Content={Content} />;
}

export default AboutSection;
