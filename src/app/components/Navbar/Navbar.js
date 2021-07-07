import React, { useState } from "react";
import { Navbar as Navb, Nav, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";

const RenderNavHashLink = ({ route, label }) => {
  const scrollWithOffset = (el) => {
    el.preventDefault();
    const _href = el.target.href;
    const elementId = _href.substring(_href.indexOf("#") + 1, _href.length);
    const yCoordinate =
      document.getElementById(elementId).getBoundingClientRect().top +
      document.getElementById("#body-container").scrollTop;
    const yOffset = -70;
    console.log(yCoordinate);
    document
      .getElementById("#body-container")
      .scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Nav.Link onClick={scrollWithOffset} href={`#${route}`}>
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
    <Navb id="custom-navbar" collapseOnSelect expand="lg" fixed="top">
      <Navb.Brand>
        <Button onClick={() => changeLanguage()} variant="primary">
          {language === "es" ? "EN" : "ES"}
        </Button>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant="primary"
        >
          {theme === "light" ? "light" : "dark"}
        </Button>
      </Navb.Brand>
      <Navb.Toggle aria-controls="basic-navbar-nav" />
      <Navb.Collapse>
        <Nav>
          {Object.entries(ROUTES).map(
            (item, idx) =>
              item[0] !== "ERROR_404_NOT_FOUND" && (
                <RenderNavHashLink
                  key={idx}
                  route={item[1]}
                  label={t(`general.${item[1]}.title`)}
                />
              )
          )}
        </Nav>
      </Navb.Collapse>
    </Navb>
  );
}

export default Navbar;
