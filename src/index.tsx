import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import QrScanner from "./QrScanner";
import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18next.use(LanguageDetector).init({
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: localStorage.getItem("lang") || "en",
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  resources: {
    en: {
      global: global_en,
    },

    es: {
      global: global_es,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <QrScanner />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
