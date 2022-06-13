import React, { useEffect, useState } from "react";
import { Navbar as Navb, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";
import { scrollWithOffset } from "../../util/scrollWithOffset";
import { useWindowDimensions } from "../../util/useWindowDimensions";
import Tooltip from "../Tooltip/Tooltip";
const icons = JSON.parse(
  `{"${ROUTES.HOME}": "house-user", "${ROUTES.PORTFOLIO}": "briefcase","${ROUTES.ABOUT}": "info-circle","${ROUTES.ABILITIES}": "tools","${ROUTES.TRAJECTORY}": "globe-americas"}`
);

const RenderNavHashLink = ({ route, label, index, setCanHide }) => {
  return (
    <Tooltip
      label={label}
      render={(ref, triggerHandler) => (
        <Nav.Link
          ref={ref}
          {...triggerHandler}
          id={`navlink-${index}`}
          onClick={(el) => {
            setCanHide(false);
            document.activeElement.blur();
            scrollWithOffset(el, setCanHide);
          }}
          href={`#${route}`}
        >
          <i
            href={`#${route}`}
            className={`navbar-icon fa fa-${icons[route]}`}
          />{" "}
          <span className="navlink-label">{label}</span>
        </Nav.Link>
      )}
    />
  );
};

function Navbar({ theme, setTheme, scrolling, setCanHide }) {
  const { width, sizeRef } = useWindowDimensions();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ||
      (navigator.language.includes("es") && "es") ||
      (navigator.language.includes("en") && "en") ||
      "es"
  );
  const changeLanguage = () => {
    window.location = "/";
    setLanguage(language === "es" ? "en" : "es");
  };
  useEffect(() => {
    i18n.changeLanguage(language === "es" ? "es" : "en");
    localStorage.setItem("language", language);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return (
    <Navb
      className={scrolling && "scrolling"}
      id="custom-navbar"
      fixed={width >= sizeRef.lg ? "top" : "bottom"}
    >
      <Navb.Brand>
        <Tooltip
          label={t("general.change.language")}
          render={(ref, triggerHandler) => (
            <span
              ref={ref}
              {...triggerHandler}
              className="btn-opt language"
              onClick={() => changeLanguage()}
            >
              {language === "es" ? "EN" : "ES"}
            </span>
          )}
        />
        <Tooltip
          label={t("general.change.theme")}
          render={(ref, triggerHandler) => (
            <span
              ref={ref}
              {...triggerHandler}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="btn-opt"
            >
              <i className={`theme-icon fa fa-adjust`} />
            </span>
          )}
        />
      </Navb.Brand>
      <Nav id="custom-nav" activeKey="">
        {Object.entries(ROUTES).map(
          (item, idx) =>
            item[0] !== "ERROR_404_NOT_FOUND" && (
              <RenderNavHashLink
                setCanHide={setCanHide}
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
