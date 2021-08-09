import React from "react";
import { Row } from "react-bootstrap";

const GeneralSection = ({
  header,
  Content,
  _id,
  style,
  headerStyle,
  animated = true,
}) => {
  return (
    <Row style={style} className="general-section-container" id={_id}>
      <Row data-aos={animated ? "fade-up" : ""} className="col-lg-8">
        <h2 style={headerStyle}>{header}</h2>
        <Content />
      </Row>
    </Row>
  );
};

export default GeneralSection;
