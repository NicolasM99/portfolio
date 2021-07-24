import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import quote_author from "../../assets/images/quote_author.jpeg";
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
          <div className="mt-3">
            <p id="quote-author-name"> - {t("quote.author")}</p>
          </div>
        </blockquote>
      </Col>
      <Col md={4} className="d-flex justify-content-center">
        <a
          href="https://www.youtube.com/user/marquesbrownlee"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="quote_author"
            src={quote_author}
            fluid
            id="quote-author-img"
          />
        </a>
      </Col>
    </Row>
  );
  return <GeneralSection Content={Content} _id={"quotes"} />;
}
