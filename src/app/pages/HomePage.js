import React, { useEffect } from "react";
import ROUTES from "../router/routes.json";
import GoBackTopBtn from "../components/GoBackTopBtn/GoBackTopBtn";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Loadable from "react-loadable";
import Quote from "../sections/Quote";
import { useWindowDimensions } from "../util/useWindowDimensions";
import { throttle } from "lodash";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = Loadable({
  loader: () => import("../components/Navbar/Navbar"),
  loading: LoadingScreen,
});
const HomeSection = Loadable({
  loader: () => import("../sections/HomeSection"),
  loading: LoadingScreen,
});
const PortfolioSection = Loadable({
  loader: () => import("../sections/PortfolioSection"),
  loading: LoadingScreen,
});
const ReferencesSection = Loadable({
  loader: () => import("../sections/ReferencesSection"),
  loading: LoadingScreen,
});
const AbilitiesSection = Loadable({
  loader: () => import("../sections/AbilitiesSection"),
  loading: LoadingScreen,
});
const TrajectorySection = Loadable({
  loader: () => import("../sections/TrajectorySection"),
  loading: LoadingScreen,
});
const Footer = Loadable({
  loader: () => import("../sections/Footer"),
  loading: LoadingScreen,
});
const MadeWithSection = Loadable({
  loader: () => import("../sections/MadeWithSection"),
  loading: LoadingScreen,
});

var lastScroll = 0;
function HomePage({
  setScrolling,
  scrolling,
  canHide,
  setCanHide,
  theme,
  setTheme,
}) {
  const { height } = useWindowDimensions();
  const handleScroll = () => {
    AOS.refresh();
    const bodyContainer = document.getElementById("body-container");
    if (
      bodyContainer &&
      document.getElementById("home_section") &&
      bodyContainer.scrollTop <
        height -
          document.getElementById("custom-navbar").getBoundingClientRect()
            .height
    ) {
      document.getElementById("home_section").style.top = `${
        -0.15 * bodyContainer.scrollTop
      }px`;
      document.getElementById("home_section").style.opacity =
        1 - bodyContainer.scrollTop / height;
    }
    if (canHide) {
      setTimeout(() => {
        const currentScroll = bodyContainer.scrollTop;
        if (currentScroll > lastScroll + 200) {
          if (!scrolling) setScrolling(true);
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

  const handleMouseMoveThrottled = throttle(handleMouseMove, 400);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveThrottled);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveThrottled);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <>
      <Navbar
        scrolling={scrolling}
        setCanHide={setCanHide}
        theme={theme}
        setTheme={setTheme}
      />{" "}
      <div
        onScroll={handleScroll}
        data-bs-spy="scroll"
        data-bs-target="#custom-navbar"
        data-bs-offset="200"
        id="body-container"
        tabIndex="0"
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
        <MadeWithSection />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
