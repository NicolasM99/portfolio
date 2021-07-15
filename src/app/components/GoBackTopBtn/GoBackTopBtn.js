import React from "react";
import { scrollWithOffset } from "../../util/scrollWithOffset";
import ROUTES from "../../router/routes";

function GoBackTopBtn({ scrolling, setCanHide }) {
  return (
    <a
      href={"#" + ROUTES.HOME}
      className={
        (scrolling ? "go-top-scrolling" : "go-top-not-scrolling") + " go-top"
      }
      onClick={(el) => scrollWithOffset(el, setCanHide)}
    >
      <i className="far fa-arrow-alt-circle-up fa-2x" />
    </a>
  );
}

export default GoBackTopBtn;
