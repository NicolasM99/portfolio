import React, { useState } from "react";
import { Navbar as Navb, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";
import { scrollWithOffset } from "../../util/scrollWithOffset";
import { useWindowDimensions } from "../../util/useWindowDimensions";
const icons = JSON.parse(
  `{"${ROUTES.HOME}": "house-user","${ROUTES.PORTFOLIO}": "briefcase","${ROUTES.ABILITIES}": "tools","${ROUTES.TRAJECTORY}": "globe-americas","${ROUTES.REFERENCES}": "id-card"}`
);

const RenderNavHashLink = ({ current, setCurrent, route, label, index }) => {
  return (
    <Nav.Link
      id={`navlink-${index}`}
      onClick={(el) => {
        if (current !== index) {
          document
            .getElementById("navlink-" + index)
            .classList.remove("active");
        }
        setCurrent(index);
        document.activeElement.blur();
        scrollWithOffset(el);
      }}
      href={`#${route}`}
    >
      <i href={`#${route}`} className={`navbar-icon fa fa-${icons[route]}`} />{" "}
      <span className="navlink-label">{label}</span>
    </Nav.Link>
  );
};

function Navbar({ theme, setTheme }) {
  const { width, sizeRef } = useWindowDimensions();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("es");
  const changeLanguage = () => {
    i18n.changeLanguage(language === "es" ? "en" : "es");
    setLanguage(language === "es" ? "en" : "es");
  };
  const [current, setCurrent] = useState(0);
  return (
    <Navb id="custom-navbar" fixed={width >= sizeRef.lg ? "top" : "bottom"}>
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
                current={current}
                setCurrent={setCurrent}
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
