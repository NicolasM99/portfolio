import React from "react";
import { useTranslation } from "react-i18next";
import AbilitiesSection from "../sections/AbilitiesSection";
import HomeSection from "../sections/HomeSection";
import PortfolioSection from "../sections/PortfolioSection";
import ReferencesSection from "../sections/ReferencesSection";
import TrajectorySection from "../sections/TrajectorySection";
import FloatingButton from "../components/FloatingButton/FloatingButton";
function HomePage() {
  const { t } = useTranslation();
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#custom-navbar"
      data-bs-offset="200"
      id="#body-container"
      tabIndex="0"
      style={{
        position: "relative",
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      <FloatingButton />
      <HomeSection />
      <PortfolioSection />
      <AbilitiesSection />
      <TrajectorySection />
      <ReferencesSection />
    </div>
  );
}

export default HomePage;
