import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function LoadingScreen(props) {
  const { t } = useTranslation();
  if (props.error) {
    return (
      <div id="loading-screen">
        <h2 className="error">{t("loading.error.try.again")}</h2>
        <Button onClick={props.retry}>{t("loading.reload")}</Button>
      </div>
    );
  }
  return (
    <div style={props.style} id="loading-screen">
      <Spinner className="loading mr-3" animation="grow" />{" "}
      <h2 className="loading">{t("general.loading")}...</h2>
    </div>
  );
}

export default LoadingScreen;
