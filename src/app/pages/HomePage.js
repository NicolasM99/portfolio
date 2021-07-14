import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import AbilitiesSection from "../sections/AbilitiesSection";
import HomeSection from "../sections/HomeSection";
import PortfolioSection from "../sections/PortfolioSection";
import ReferencesSection from "../sections/ReferencesSection";
import TrajectorySection from "../sections/TrajectorySection";
// import FloatingButton from "../components/FloatingButton/FloatingButton";
import ROUTES from "../router/routes.json";
import GoBackTopBtn from "../components/GoBackTopBtn/GoBackTopBtn";
var lastScroll = 0;
function HomePage({ setScrolling, scrolling }) {
  const handleScroll = () => {
    setTimeout(() => {
      const currentScroll =
        document.getElementById("#body-container").scrollTop;
      if (currentScroll > lastScroll) {
        setScrolling(true);
      } else if (currentScroll < lastScroll) {
        setScrolling(false);
      }
      console.log(lastScroll, currentScroll);
      lastScroll = currentScroll;
    }, 200);
  };

  useEffect(() => {
    document
      .getElementById("#body-container")
      .addEventListener("scroll", handleScroll);
    return () =>
      document
        .getElementById("#body-container")
        .removeEventListener("scroll", handleScroll);
  }, []);
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
      {/* <FloatingButton /> */}
      <GoBackTopBtn scrolling={scrolling} />
      <div id={ROUTES.HOME} style={{ height: "0" }}></div>
      <HomeSection />
      <PortfolioSection />
      <AbilitiesSection />
      <TrajectorySection />
      <ReferencesSection />
    </div>
  );
}

export default HomePage;
