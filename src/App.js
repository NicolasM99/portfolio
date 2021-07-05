// import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import FloatingButton from "./app/components/FloatingButton/FloatingButton";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import "./app/i18next/i18n";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
