import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import quote_author from "../../assets/images/quote_author.jpeg";
export default function Quote() {
  const { t } = useTranslation();
  const Content = () => (
    <Row className="quote-wrapper">
      <Row className="w-100 mb-4 ">
        <h2>{t("quote.title")}</h2>
      </Row>
      <Col
        md={8}
        className="d-flex h-100 align-items-center flex-column justify-content-center"
      >
        <blockquote>
          <p className="quote-phrase">{t("quote.blackquote")}</p>
          <div className="mt-3">
            <a
              href="https://www.youtube.com/user/marquesbrownlee"
              target="_blank"
              rel="noreferrer"
              id="quote-author-name"
            >
              <i className="fab fa-youtube" /> {t("quote.author")}
            </a>
          </div>
        </blockquote>
      </Col>
      <Col md={4} className="quote-author-container">
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
