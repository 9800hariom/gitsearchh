// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [theme, setTheme] = useState("dark"); // Initialize theme state

  // Function to fetch user data from GitHub API
  const fetchProfileData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setProfileData(data); // Set the profile data if the request is successful
      } else {
        setProfileData(null); // Clear profile data if user is not found
        alert("User not found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    fetchProfileData(username);
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        username={username}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        theme={theme}
        toggleTheme={toggleTheme} // Pass toggleTheme function to Header
      />
      <ProfileCard profileData={profileData} theme={theme} />
    </div>
  );
}

export default App;
