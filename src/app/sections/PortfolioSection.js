import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import ROUTES from "../router/routes.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import behanceProjects from "../util/behanceProjects.json";
import { Button, Col, Row } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function PortfolioSection() {
  const { t, i18n } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const Project = ({ url, img, title, description }) => (
    <Row style={{ height: "70%" }}>
      <Col md={6} className="h-auto pr-4 pb-3">
        <img
          src={img.src}
          sizes="(max-width: 1400px) 100vw, 1400px"
          alt={img.alt}
          loading="lazy"
        />
      </Col>
      <Col md={6} className="h-auto text-left pl-4">
        <h5>{title} </h5>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="d-flex align-items-center font-weight-normal"
        >
          <i className="fa fa-external-link-alt" />
          {t("portfolio.see.project")}
        </a>
      </Col>
    </Row>
  );

  const Content = () => (
    <div className="w-100">
      <p className="pb-3">{t("portfolio.description")}</p>
      <div>
        <Swiper
          loop
          mousewheel
          keyboard
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          navigation
          pagination={{
            clickable: true,
          }}
        >
          {behanceProjects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <Project
                url={project.url}
                img={project.img}
                title={
                  i18n.language === "es" ? project.title.es : project.title.en
                }
                description={
                  i18n.language === "es"
                    ? project.description.es
                    : project.description.en
                }
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev" ref={prevRef}>
            <i className="fa fa-chevron-left fa-2x" />
          </div>
          <div className="swiper-button-next" ref={nextRef}>
            <i className="fa fa-chevron-right fa-2x" />
          </div>
        </Swiper>
      </div>
      <a
        href="https://www.behance.net/nicolasmoreno99"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="mt-4">{t("portfolio.see.portfolio")}</Button>
      </a>
    </div>
  );
  return (
    <GeneralSection
      style={{ textAlign: "center" }}
      headerStyle={{ width: "100%", textAlign: "center" }}
      header={t("general.portfolio.title")}
      Content={Content}
      _id={ROUTES.PORTFOLIO}
    />
  );
}

export default PortfolioSection;
