import React, { useEffect, Suspense, lazy, useState } from "react";
import ROUTES from "../router/routes.json";
import GoBackTopBtn from "../components/GoBackTopBtn/GoBackTopBtn";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Quote from "../sections/Quote";
import { useWindowDimensions } from "../util/useWindowDimensions";
import * as _ from "lodash";
import MadeWithSection from "../sections/MadeWithSection";
const HomeSection = lazy(() => import("../sections/HomeSection"));
const PortfolioSection = lazy(() => import("../sections/PortfolioSection"));
const ReferencesSection = lazy(() => import("../sections/ReferencesSection"));
const AbilitiesSection = lazy(() => import("../sections/AbilitiesSection"));
const TrajectorySection = lazy(() => import("../sections/TrajectorySection"));
const Footer = lazy(() => import("../sections/Footer"));

var lastScroll = 0;
// var canHideRef;
function HomePage({ setScrolling, scrolling, canHide, setCanHide }) {
  const { height } = useWindowDimensions();
  const [showHomeSection, setShowHomeSection] = useState(true);
  //TODO: Fix height of home for mobile and improve parallax
  const handleScroll = () => {
    // setTimeout(() => {
    const bodyContainer = document.getElementById("body-container");
    if (
      bodyContainer.scrollTop <
      height -
        document.getElementById("custom-navbar").getBoundingClientRect().height
    ) {
      if (!showHomeSection) setShowHomeSection(true);

      document.getElementById("home_section").style.top = `${
        -0.15 * bodyContainer.scrollTop
      }px`;
      document.getElementById("home_section").style.opacity =
        1 - bodyContainer.scrollTop / height;
      // if (!showHomeSection) setShowHomeSection(true);
      // if (document.getElementById("expanded-circle"))
      //   document.getElementById("expanded-circle").style.transform = `scale(${
      //     bodyContainer.scrollTop / height + 1
      //   })`;
    } else {
      setShowHomeSection(false);
    }

    if (canHide) {
      setTimeout(() => {
        const currentScroll =
          document.getElementById("body-container").scrollTop;
        if (currentScroll > lastScroll + 200) {
          if (!scrolling) setScrolling(true);
        } else if (currentScroll < lastScroll) {
          setScrolling(false);
        }
        lastScroll = currentScroll;
      }, 200);
    }
    // }, 50);
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

  // useEffect(() => {
  //   canHideRef = canHide;
  // }, [canHide]);

  const handleMouseMoveThrottled = _.throttle(handleMouseMove, 400);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveThrottled);
    // document
    //   .getElementById("body-container")
    //   .addEventListener("scroll", handleScroll);
    return () => {
      // document
      //   .getElementById("body-container")
      //   .removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMoveThrottled);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div
        onScroll={() => handleScroll()}
        data-bs-spy="scroll"
        data-bs-target="#custom-navbar"
        data-bs-offset="200"
        id="body-container"
        tabIndex="0"
        style={{
          position: "relative",
          overflowY: "scroll",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* <FloatingButton /> */}
        <GoBackTopBtn setCanHide={setCanHide} scrolling={scrolling} />
        <div id={ROUTES.HOME} style={{ height: "0" }}></div>
        <HomeSection
          setCanHide={setCanHide}
          showHomeSection={showHomeSection}
        />
        <PortfolioSection
          setCanHide={setCanHide}
          showCircle={showHomeSection}
        />
        <AbilitiesSection />
        <TrajectorySection />
        <ReferencesSection />
        <Quote />
        <MadeWithSection />
        <Footer />
      </div>
    </Suspense>
  );
}

export default HomePage;
