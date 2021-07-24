import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import "./app/i18next/i18n";
import "@splidejs/splide/dist/css/splide.min.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
