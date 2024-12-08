import React, { useState, useEffect } from "react";
import "./SelectionEncadrement.css";  // Importation du CSS spécifique à cette page

const SelectionEncadrement = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

  // Simulation de récupération des données depuis une API
  useEffect(() => {
    const fetchProjects = async () => {
      // Remplacer cette partie par une requête API réelle
      const response = [
        { id: 1, title: "Développement d'une application web", proposer: "Entreprise A", selected: false },
        { id: 2, title: "Optimisation des algorithmes AI", proposer: "Prof. Ahmed", selected: false },
      ];
      setProjects(response);
    };

    fetchProjects();
  }, []);

  const handleSelect = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, selected: !project.selected } : project
      )
    );
  };

  const handleSubmit = () => {
    // Collecte des projets sélectionnés
    const selected = projects.filter((project) => project.selected);
    setSelectedProjects(selected);

    // Vous pouvez ici envoyer cette information au backend pour sauvegarder les projets sélectionnés
    alert("Projets sélectionnés : " + selected.map((p) => p.title).join(", "));
  };

  return (
    <div className="selection-encadrement-container">
      <h2>Sélectionner les Projets à Encadrer</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <input
              type="checkbox"
              checked={project.selected}
              onChange={() => handleSelect(project.id)}
              className="project-checkbox"
            />
            <span>{project.title} - {project.proposer}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="submit-button">Soumettre la sélection</button>
      
      {selectedProjects.length > 0 && (
        <div className="selected-projects">
          <h3>Projets sélectionnés :</h3>
          <ul>
            {selectedProjects.map((project) => (
              <li key={project.id}>{project.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectionEncadrement;
