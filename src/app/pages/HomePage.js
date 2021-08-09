import React, { useEffect, useState } from "react";
import ROUTES from "../router/routes.json";
import GoBackTopBtn from "../components/GoBackTopBtn/GoBackTopBtn";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Loadable from "react-loadable";
import Quote from "../sections/Quote";
import { useWindowDimensions } from "../util/useWindowDimensions";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Modal } from "react-bootstrap";
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
const ContactCTASection = Loadable({
  loader: () => import("../sections/ContactCTASection"),
  loading: LoadingScreen,
});
const SpecialThanksSection = Loadable({
  loader: () => import("../sections/SpecialThanksSection"),
  loading: LoadingScreen,
});
const AboutSection = Loadable({
  loader: () => import("../sections/AboutSection"),
  loading: LoadingScreen,
});

// var lastScroll = 0;
function HomePage({
  setScrolling,
  scrolling,
  // canHide,
  setCanHide,
  theme,
  setTheme,
}) {
  const [showContactModal, setShowContactModal] = useState(false);
  const handleCloseContactModal = () => setShowContactModal(false);
  const handleShowContactModal = () => setShowContactModal(true);
  const { height } = useWindowDimensions();
  const handleScroll = () => {
    AOS.refresh();
    const bodyContainer = document.getElementById("body-container");
    if (bodyContainer && document.getElementById("home_section")) {
      document.getElementById("home_section").style.top = `${
        -0.15 * bodyContainer.scrollTop
      }px`;
      document.getElementById("home_section").style.opacity =
        1 - bodyContainer.scrollTop / height;
    }
    // if (canHide) {
    //   setTimeout(() => {
    //     const currentScroll = bodyContainer.scrollTop;
    //     if (currentScroll > lastScroll + 200) {
    //       if (!scrolling) setScrolling(true);
    //     } else if (currentScroll < lastScroll) {
    //       setScrolling(false);
    //     }
    //     lastScroll = currentScroll;
    //   }, 200);
    // }
  };

  // const handleMouseMove = (e) => {
  //   if (e.clientY <= 100 && window.innerWidth >= 992) {
  //     setScrolling(false);
  //   } else if (
  //     e.clientY >= window.innerHeight - 80 &&
  //     window.innerWidth < 992
  //   ) {
  //     setScrolling(false);
  //   }
  // };

  // const handleMouseMoveThrottled = throttle(handleMouseMove, 400);

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMoveThrottled);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMoveThrottled);
  //   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar
        scrolling={scrolling}
        setCanHide={setCanHide}
        theme={theme}
        setTheme={setTheme}
      />
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
        <HomeSection
          setCanHide={setCanHide}
          handleShowContactModal={handleShowContactModal}
        />
        <AboutSection />
        <Quote />
        <PortfolioSection />
        <AbilitiesSection />
        <TrajectorySection />
        <ReferencesSection />
        <ContactCTASection handleShowContactModal={handleShowContactModal} />
        <MadeWithSection />
        <SpecialThanksSection />
        <Footer />
      </div>
      <Modal show={showContactModal} onHide={handleCloseContactModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContactModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseContactModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HomePage;
