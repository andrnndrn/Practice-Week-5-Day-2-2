import React, { useContext } from "react";
import { LanguageContext } from "../App";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">TODAY</a>
        <button
          onClick={() => setLanguage(language === "en" ? "id" : "en")}
          className="btn btn-outline-danger"
        >
          {language === "en" ? "English" : "Indonesia"}
        </button>
      </div>
    </nav>
  );
}
