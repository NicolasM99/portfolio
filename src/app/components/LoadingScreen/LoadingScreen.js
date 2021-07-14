import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Spinner animation="grow" /> <h2>Cargando...</h2>
    </div>
  );
}

export default LoadingScreen;
