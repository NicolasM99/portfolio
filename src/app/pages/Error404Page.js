import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ROUTES from "../router/routes.json";
function Error404Page(props) {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("error404.title")}</h1>
      <p>{t("error404.description")}</p>
      <Link to={ROUTES.HOME}>{t("general.go.back")}</Link>
    </div>
  );
}

export default Error404Page;
