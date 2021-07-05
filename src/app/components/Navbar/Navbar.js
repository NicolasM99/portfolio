import React, { useState } from "react";
import { Navbar as Navb, Nav, Button } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";

const RenderNavHashLink = ({ route, label }) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Nav.Link
      scroll={scrollWithOffset}
      as={NavHashLink}
      smooth
      replace
      to={`#${route}`}
    >
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
    <Navb collapseOnSelect fixed="top" expand="lg">
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
