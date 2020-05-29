import React, { useState } from "react";
import "../../styles/darkmode.scss";

const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchToggle = () => {
    if (!lightMode) {
      setLightMode(true);
      setDarkMode(false);
    } else {
      setLightMode(false);
      setDarkMode(true);
    }
  };

  return (
    <button
      className={lightMode ? "theme-toggle light" : "theme-toggle dark"}
      onClick={handleSwitchToggle}
    >
      <div className="toggle-ball"></div>
    </button>
  );
};

export default ThemeToggle;
