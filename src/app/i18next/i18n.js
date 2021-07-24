import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import esTrans from "./es.json";
import enTrans from "./en.json";

const resources = {
  es: {
    translation: esTrans,
  },
  en: {
    translation: enTrans,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
