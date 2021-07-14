import React, { useEffect } from "react";
import { scrollWithOffset } from "../../util/scrollWithOffset";
import ROUTES from "../../router/routes";

var lastScroll = 0;
function GoBackTopBtn({ scrolling }) {
  return (
    <a
      href={"#" + ROUTES.HOME}
      className={
        (scrolling ? "go-top-scrolling" : "go-top-not-scrolling") + " go-top"
      }
      onClick={scrollWithOffset}
    >
      <i className="far fa-arrow-alt-circle-up fa-2x" />
    </a>
  );
}

export default GoBackTopBtn;
