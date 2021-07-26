import React from "react";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";

const people = [
  {
    name: "Bedimcode",
    url: "https://www.youtube.com/c/Bedimcode",
    icon: "fab fa-youtube",
  },
  {
    name: "Nicolás Sierra",
    url: "https://nicolas0611.github.io/portfolio-website/",
    icon: "fa fa-external-link-alt",
  },
  {
    name: "José David Moreno",
    url: "https://www.linkedin.com/in/jos%C3%A9-david-moreno-posada-7033a9137/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Andrea Barragán",
    url: "https://www.linkedin.com/in/paula-andrea-barrag%C3%A1n-guzm%C3%A1n-7a554b169/",
    icon: "fab fa-linkedin",
  },
  {
    name: "Adrian Volcinschi",
    url: "https://www.linkedin.com/in/adrian-sebastian-volcinschi-moros/",
    icon: "fab fa-linkedin",
  },
];
const Content = (t) => (
  <div className="small-section">
    <h3 className="mb-4">{t("special.thanks.title")}...</h3>
    {people.map((person, idx) => (
      <p className="ml-4" key={idx}>
        <a
          style={{ color: "var(--text-dark)", fontWeight: "normal" }}
          href={person.url}
          target="_blank"
          rel="noreferrer"
        >
          <i className={person.icon} />
          {person.name}
        </a>
      </p>
    ))}
    <h3 className="mt-5" style={{ color: "var(--primary)" }}>
      ...{t("special.thanks.to.you")}
    </h3>
  </div>
);

function SpecialThanksSection() {
  const { t } = useTranslation();
  return <GeneralSection Content={() => Content(t)} />;
}

export default SpecialThanksSection;
