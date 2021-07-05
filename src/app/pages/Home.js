import React from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="home" style={{ height: "100vh" }}>
        <h1>{t("home.title")}</h1>
      </div>
      <div id="portfolio" style={{ height: "100vh" }}>
        <h1>{t("general.portfolio.title")}</h1>
      </div>
    </div>
  );
}

export default Home;
