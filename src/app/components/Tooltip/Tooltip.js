import React from "react";
import { Tooltip as Ttp, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props, label) => (
  <Ttp id="button-tooltip" {...props}>
    {label}
  </Ttp>
);

function Tooltip({ label, render, placement = "bottom" }) {
  return (
    <OverlayTrigger
      placement={placement}
      delay={{ show: 500, hide: 200 }}
      overlay={(props) => renderTooltip(props, label)}
    >
      {({ ref, ...triggerHandler }) => render(ref, triggerHandler)}
    </OverlayTrigger>
  );
}

export default Tooltip;
