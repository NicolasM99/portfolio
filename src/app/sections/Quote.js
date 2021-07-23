import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";

export default function Quote() {
  const { t } = useTranslation();
  const Content = () => (
    <Row className="d-flex h-100 align-items-center flex-row justify-content-center">
      <Col
        md={8}
        className="d-flex h-100 align-items-center flex-column justify-content-center"
      >
        <blockquote>
          <i className="quote-phrase">{t("quote.blackquote")}</i>
          <p className="mt-3">
            <b> - {t("quote.author")}</b>
          </p>
        </blockquote>
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <a
          href="https://www.youtube.com/user/marquesbrownlee"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s900-c-k-c0x00ffffff-no-rj"
            fluid
            id="quote-author-img"
          />
        </a>
      </Col>
    </Row>
  );
  return (
    <GeneralSection
      //   header={t("general.abilities.title")}
      Content={Content}
      _id={"quotes"}
    />
  );
}
