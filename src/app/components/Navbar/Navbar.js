import React, { useState } from "react";
import { Navbar as Navb, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";
import { scrollWithOffset } from "../../util/scrollWithOffset";

const icons = JSON.parse(
  `{"${ROUTES.HOME}": "house-user","${ROUTES.PORTFOLIO}": "briefcase","${ROUTES.ABILITIES}": "tools","${ROUTES.TRAJECTORY}": "globe-americas","${ROUTES.REFERENCES}": "id-card"}`
);

const RenderNavHashLink = ({ route, label, index }) => {
  return (
    <Nav.Link
      id={`navlink-${index}`}
      onClick={(el) => {
        document.getElementById("navlink-" + index).classList.remove("active");
        document.activeElement.blur();
        scrollWithOffset(el);
      }}
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
    </Navb>
  );
}

export default Navbar;
