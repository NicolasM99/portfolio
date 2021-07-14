import React, { useState } from "react";
import { Navbar as Navb, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";

const icons = JSON.parse(
  `{"${ROUTES.HOME}": "house-user","${ROUTES.PORTFOLIO}": "briefcase","${ROUTES.ABILITIES}": "tools","${ROUTES.TRAJECTORY}": "globe-americas","${ROUTES.REFERENCES}": "id-card"}`
);

const RenderNavHashLink = ({ route, label, index }) => {
  const scrollWithOffset = (el) => {
    el.preventDefault();
    // document.getElementById("navlink-" + index).classList;
    // console.log(document.getElementById("navlink-" + index).classList[1]);
    document.getElementById("navlink-" + index).classList.remove("active");
    // console.log(document.getElementById("navlink-" + index).classList);
    const _href = el.target.parentElement.href || el.target.href;
    const elementId = _href.substring(_href.indexOf("#") + 1, _href.length);
    const yCoordinate =
      document.getElementById(elementId).getBoundingClientRect().top +
      document.getElementById("#body-container").scrollTop;
    const yOffset = 0;
    document
      .getElementById("#body-container")
      .scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Nav.Link
      id={`navlink-${index}`}
      onClick={scrollWithOffset}
      href={`#${route}`}
    >
      <i href={`#${route}`} className={`navbar-icon fa fa-${icons[route]}`} />{" "}
      {label}
    </Nav.Link>
  );
};

function Navbar({ theme, setTheme }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("es");
  const changeLanguage = () => {
    i18n.changeLanguage(language === "es" ? "en" : "es");
    setLanguage(language === "es" ? "en" : "es");
  };
  return (
    <Navb id="custom-navbar" fixed="top">
      <Navb.Brand>
        <span className="btn-opt" onClick={() => changeLanguage()}>
          {language === "es" ? "EN" : "ES"}
        </span>
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="btn-opt"
        >
          <i className={`fa fa-${theme === "light" ? "lightbulb" : "moon"}`} />
        </span>
      </Navb.Brand>
      <Navb.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navb.Collapse> */}
      <Nav activeKey="">
        {Object.entries(ROUTES).map(
          (item, idx) =>
            item[0] !== "ERROR_404_NOT_FOUND" && (
              <RenderNavHashLink
                key={idx}
                route={item[1]}
                index={idx}
                label={t(`general.${item[1]}.title`)}
              />
            )
        )}
      </Nav>
      {/* </Navb.Collapse> */}
    </Navb>
  );
}

export default Navbar;
