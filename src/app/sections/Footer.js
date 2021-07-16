import React from "react";
import SocialMedia from "../components/SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© Nicolás Moreno Posada, {new Date().getFullYear()} </p>
      <p>Bogotá, Colombia</p>
      <SocialMedia color={"var(--text-light)"} />
    </footer>
  );
}
