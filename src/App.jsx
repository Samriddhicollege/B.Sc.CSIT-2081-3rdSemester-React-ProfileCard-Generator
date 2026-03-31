import React, { useState, useEffect } from "react";
import CardForm from "./components/CardForm";
import ProfileList from "./components/ProfileList";

const App = () => {
  // 1. State Management: Manage display state (list of profiles)
  const [profiles, setProfiles] = useState(() => {
    // 2. LocalStorage Persistence: Retrieve data on initial load
    const saved = localStorage.getItem("profile-cards");
    return saved ? JSON.parse(saved) : [];
  });

  // 3. LocalStorage Persistence: Store data whenever it changes
  useEffect(() => {
    localStorage.setItem("profile-cards", JSON.stringify(profiles));
  }, [profiles]);

  // 4. Custom Handler: Function passed via props
  const addProfile = (newProfile) => {
    setProfiles((prev) => [newProfile, ...prev]);
  };

  const deleteProfile = (id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header>
        <h1>Card Generator</h1>
        <p>Simple profile cards, stored locally.</p>
      </header>

      <main>
        <CardForm onAddProfile={addProfile} />
        <ProfileList profiles={profiles} onDeleteProfile={deleteProfile} />
      </main>
    </div>
  );
};

export default App;
