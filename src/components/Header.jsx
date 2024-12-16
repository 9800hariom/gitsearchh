// src/components/Header.jsx
import React from "react";

function Header({ username, onSearchChange, onSearch, theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>devfinder</h1>
      <div className="theme-toggle">
        <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
        <button onClick={toggleTheme} className="toggle-btn">
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={username}
          onChange={onSearchChange}
          placeholder="Search GitHub username..."
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </header>
  );
}

export default Header;
