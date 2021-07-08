import React from "react";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#custom-navbar"
      data-bs-offset="100"
      id="#body-container"
      tabIndex="0"
      style={{
        position: "relative",
        overflowY: "scroll",
        height: "100vh",
        // scrollBehavior: "smooth",
      }}
    >
      <div id="home" style={{ height: "100vh" }}>
        <h1>{t("home.title")}</h1>
      </div>
      <div id="portfolio" style={{ height: "100vh" }}>
        <h1>{t("general.portfolio.title")}</h1>
      </div>
      <div id="abilities" style={{ height: "100vh" }}>
        <h1>{t("general.abilities.title")}</h1>
      </div>
    </div>
  );
}

export default Home;
