import React from "react";
import { Row } from "react-bootstrap";

function GeneralSection({ header, Content, _id, style }) {
  return (
    <Row style={style} className="general-section-container" id={_id}>
      <Row className="col-lg-8">
        <h2>{header}</h2>
        <Content />
      </Row>
    </Row>
  );
}

export default GeneralSection;
