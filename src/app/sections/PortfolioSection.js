import React from "react";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import ROUTES from "../router/routes.json";
const Content = () => (
  <div>
    <h3>This is my portfolio!</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
);

function PortfolioSection() {
  const { t } = useTranslation();
  return (
    <GeneralSection
      header={t("general.portfolio.title")}
      Content={Content}
      _id={ROUTES.PORTFOLIO}
    />
  );
}

export default PortfolioSection;