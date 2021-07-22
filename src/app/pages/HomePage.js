import React, { useEffect, Suspense, lazy } from "react";

import ROUTES from "../router/routes.json";
import GoBackTopBtn from "../components/GoBackTopBtn/GoBackTopBtn";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Quote from "../sections/Quote";
const HomeSection = lazy(() => import("../sections/HomeSection"));
const PortfolioSection = lazy(() => import("../sections/PortfolioSection"));
const ReferencesSection = lazy(() => import("../sections/ReferencesSection"));
const AbilitiesSection = lazy(() => import("../sections/AbilitiesSection"));
const TrajectorySection = lazy(() => import("../sections/TrajectorySection"));

const Footer = lazy(() => import("../sections/Footer"));

var lastScroll = 0;
var canHideRef;
function HomePage({ setScrolling, scrolling, canHide, setCanHide }) {
  const handleScroll = () => {
    if (canHideRef) {
      setTimeout(() => {
        const currentScroll =
          document.getElementById("#body-container").scrollTop;
        if (currentScroll > lastScroll + 200) {
          setScrolling(true);
        } else if (currentScroll < lastScroll) {
          setScrolling(false);
        }
        lastScroll = currentScroll;
      }, 200);
    }
  };

  const handleMouseMove = (e) => {
    if (e.clientY <= 100 && window.innerWidth >= 992) {
      setScrolling(false);
    } else if (
      e.clientY >= window.innerHeight - 80 &&
      window.innerWidth < 992
    ) {
      setScrolling(false);
    }
  };

  useEffect(() => {
    canHideRef = canHide;
  }, [canHide]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    document
      .getElementById("#body-container")
      .addEventListener("scroll", handleScroll);
    return () => {
      document
        .getElementById("#body-container")
        .removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense fallback={<LoadingScreen />}>
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
        <GoBackTopBtn setCanHide={setCanHide} scrolling={scrolling} />
        <div id={ROUTES.HOME} style={{ height: "0" }}></div>
        <HomeSection setCanHide={setCanHide} />
        <PortfolioSection />
        <AbilitiesSection />
        <TrajectorySection />
        <ReferencesSection />
        <Quote />
        <Footer />
      </div>
    </Suspense>
  );
}

export default HomePage;
