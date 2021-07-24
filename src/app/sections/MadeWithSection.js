import React from "react";
import { useTranslation } from "react-i18next";
import GeneralSection from "../components/GeneralSection/GeneralSection";

const tools = [
  "React JS",
  "Bootstrap",
  "Firebase Hosting",
  "Github",
  "Sass",
  "i18next",
  "React Spring",
];
const Content = (t) => (
  <div>
    <h3>{t("made.with.title")}...</h3>
    <ul>
      {tools.map((tool, idx) => (
        <li key={idx}>{tool}</li>
      ))}
    </ul>{" "}
    <a
      href="https://github.com/NicolasM99/portfolio"
      target="_blank"
      rel="noreferrer"
    >
      {" "}
      <i className="fa fa-external-link-alt" /> {t("made.with.see.repo")}
    </a>
  </div>
);

function MadeWithSection() {
  const { t } = useTranslation();
  return <GeneralSection Content={() => Content(t)} />;
}

export default MadeWithSection;
