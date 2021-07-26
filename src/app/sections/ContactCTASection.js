import React from "react";
import { Button, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";
import ROUTES from "../router/routes.json";
import cube from "../../assets/images/cube.png";
function ContactCTASection({ handleShowContactModal }) {
  const { t } = useTranslation();
  const Content = () => (
    <div className="w-100 text-center">
      <Image className="my-5" src={cube} alt="know more" />
      <br />
      <Button onClick={handleShowContactModal} variant="primary">
        <i className="fa fa-phone-alt" />
        {t("home.contact")}
      </Button>
    </div>
  );
  return (
    <GeneralSection
      headerStyle={{ textAlign: "center", width: "100%" }}
      header={t("contact-cta.title")}
      Content={Content}
      _id={ROUTES.ABILITIES}
    />
  );
}

export default ContactCTASection;
