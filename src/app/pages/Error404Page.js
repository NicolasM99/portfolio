import React from "react";
import { useTranslation } from "react-i18next";
import ROUTES from "../router/routes.json";
function Error404Page(props) {
  const { t } = useTranslation();
  return (
    <div id="error-page">
      <h1>{t("error404.title")}</h1>
      <p>{t("error404.description")}</p>
      <a href={`/#${ROUTES.HOME}`}>{t("general.go.back")}</a>
    </div>
  );
}

export default Error404Page;
