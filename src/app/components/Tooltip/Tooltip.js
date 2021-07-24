import React from "react";
import { Tooltip as Ttp, OverlayTrigger } from "react-bootstrap";
import { useWindowDimensions } from "../../util/useWindowDimensions";

const renderTooltip = (props, label) => (
  <Ttp id="button-tooltip" {...props}>
    {label}
  </Ttp>
);

function Tooltip({ label, render, placement = "bottom" }) {
  const { width, sizeRef } = useWindowDimensions();
  return (
    <OverlayTrigger
      transition={false}
      placement={placement}
      delay={{ show: 500 }}
      overlay={(props) => renderTooltip(props, label)}
    >
      {({ ref, ...triggerHandler }) =>
        render(width > sizeRef.lg ? ref : null, triggerHandler)
      }
    </OverlayTrigger>
  );
}

export default Tooltip;
