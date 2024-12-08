import React, { useState } from "react";

const PreferencesJury = () => {
  const [preferences, setPreferences] = useState({
    availableDates: "",
    preferredProjects: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Préférences soumises !");
  };

  return (
    <div>
      <h2>Préférences de Jury</h2>
      <form onSubmit={handleSubmit}>
        <label>Dates Disponibles :</label>
        <input
          type="text"
          value={preferences.availableDates}
          onChange={(e) => setPreferences({ ...preferences, availableDates: e.target.value })}
        />

        <label>Projets Préférés :</label>
        <input
          type="text"
          value={preferences.preferredProjects}
          onChange={(e) => setPreferences({ ...preferences, preferredProjects: e.target.value })}
        />

        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default PreferencesJury;
