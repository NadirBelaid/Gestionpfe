import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-title">
        <img src="/logo.png" alt="Logo" className="header-logo" />
        <div className="header-text">
          <h1 className="platform-title">PRO PFE</h1>
          <p className="platform-subtitle">Université Abou Bekr Belkaid Tlemcen</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
