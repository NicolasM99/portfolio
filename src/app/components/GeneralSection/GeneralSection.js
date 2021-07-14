import React from "react";
import { Row } from "react-bootstrap";

function GeneralSection({ header, Content, _id }) {
  return (
    <Row className="general-section-container" id={_id}>
      <div
        style={{
          position: "absolute",
          height: "100vh",
          width: "100%",
          backgroundColor: "white",
        }}
      ></div>
      <Row className="col-lg-8">
        <h2>{header}</h2>

        <Content />
      </Row>
    </Row>
  );
}

export default GeneralSection;
