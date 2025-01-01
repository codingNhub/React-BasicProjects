import { useState } from "react";
import "../App.css";

const Theme = ({ themeList }) => {
  const [theme, setTheme] = useState(""); // Light or Dark theme

  const handleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1> Current Theme is: {theme || "Default"}</h1>
      {themeList.map((themeOption, index) => (
        <button
          key={index}
          type="button"
          className={
            themeOption === "Light"
              ? "btn light"
              : themeOption === "Dark"
              ? "btn dark"
              : "btn btn-danger"
          }
          onClick={() => handleTheme(themeOption)}
        >
          {themeOption}
        </button>
      ))}
    </div>
  );
};

export default Theme;
