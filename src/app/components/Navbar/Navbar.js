import React, { useEffect, useState } from "react";
import { Navbar as Navb, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ROUTES from "../../router/routes.json";
import { scrollWithOffset } from "../../util/scrollWithOffset";
import { useWindowDimensions } from "../../util/useWindowDimensions";
import Tooltip from "../Tooltip/Tooltip";
const icons = JSON.parse(
  `{"${ROUTES.HOME}": "house-user","${ROUTES.PORTFOLIO}": "briefcase","${ROUTES.ABILITIES}": "tools","${ROUTES.TRAJECTORY}": "globe-americas","${ROUTES.REFERENCES}": "id-card"}`
);

const RenderNavHashLink = ({
  current,
  setCurrent,
  route,
  label,
  index,
  setCanHide,
}) => {
  return (
    <Tooltip
      label={label}
      render={(ref, triggerHandler) => (
        <Nav.Link
          ref={(current !== index && ref) || null}
          {...triggerHandler}
          id={`navlink-${index}`}
          onClick={(el) => {
            setCanHide(false);
            if (current !== index) {
              document
                .getElementById("navlink-" + index)
                .classList.remove("active");
            }
            setCurrent(index);
            document.activeElement.blur();
            scrollWithOffset(el, setCanHide);
          }}
          href={`#${route}`}
        >
          {" "}
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
    localStorage.getItem("language") || "es"
  );
  const changeLanguage = () => {
    // i18n.changeLanguage(language === "es" ? "en" : "es");
    // localStorage.setItem("language", language);
    setLanguage(language === "es" ? "en" : "es");
  };
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    i18n.changeLanguage(language === "es" ? "es" : "en");
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <Navb
      className={scrolling && "scrolling"}
      id="custom-navbar"
      fixed={width >= sizeRef.lg ? "top" : "bottom"}
    >
      <Navb.Brand>
        {/* //TODO: Save Language and theme preferences in localStorage */}
        <Tooltip
          label={t("general.change.language")}
          render={(ref, triggerHandler) => (
            <span
              ref={ref}
              {...triggerHandler}
              className="btn-opt"
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
      <Navb.Toggle aria-controls="basic-navbar-nav" />
      <Nav activeKey="">
        {Object.entries(ROUTES).map(
          (item, idx) =>
            item[0] !== "ERROR_404_NOT_FOUND" && (
              <RenderNavHashLink
                current={current}
                setCanHide={setCanHide}
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
