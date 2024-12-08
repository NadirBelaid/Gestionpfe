import React from "react";

const SuiviProjetsEncadres = () => {
  const projects = [
    { id: 1, title: "Développement d'une application web", status: "En cours" },
    { id: 2, title: "Optimisation des algorithmes AI", status: "Terminé" },
  ];

  return (
    <div>
      <h2>Suivi des Projets Encadrés</h2>
      <table>
        <thead>
          <tr>
            <th>Titre du Projet</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuiviProjetsEncadres;
