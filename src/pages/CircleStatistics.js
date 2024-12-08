import React, { useState } from 'react';
import './CircleStatistics.css'; // Assure-toi que le fichier CSS est bien importé

const CircleStatistics = () => {
  const [users, setUsers] = useState([
    { id: 1, role: "Professeur", name: "Ahmed", email: "ahmed@example.com" },
    { id: 2, role: "Étudiant", name: "Amina", email: "amina@example.com" },
    { id: 3, role: "Entreprise", name: "Diagnomed", email: "contact@diagnomed.com" },
    { id: 4, role: "Professeur", name: "Ali", email: "ali@example.com" },
    { id: 5, role: "Étudiant", name: "Sara", email: "sara@example.com" },
    { id: 6, role: "Entreprise", name: "Sonelgaz", email: "sonelgaz@example.com" },
    { id: 7, role: "Professeur", name: "Khaled", email: "khaled@example.com" },
  ]);

  // Fonction pour compter les utilisateurs par rôle
  const countByRole = (role) => {
    return users.filter(user => user.role === role).length;
  };

  return (
    <div className="container">
      <div className="split-container">
        {/* Zone d'ajout d'utilisateur */}
        <div className="add-user-zone">
          <h2>Ajouter un Utilisateur</h2>
          {/* Formulaire d'ajout */}
          <div className="formulaire-utilisateur">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
            <input type="email" placeholder="Email" />
            <select>
              <option>Choisir un rôle</option>
              <option>Étudiant</option>
              <option>Professeur</option>
              <option>Entreprise</option>
            </select>
            <button>Ajouter</button>
          </div>
        </div>

        {/* Zone des statistiques */}
        <div className="statistics-zone">
          <h2>Statistiques</h2>
          <div className="circle-container">
            <div className="circle">
              <div className="circle-stat">
                <span className="stat-number">{countByRole('Professeur')}</span>
                <span className="stat-label">Professeur</span>
              </div>
              <div className="circle-stat">
                <span className="stat-number">{countByRole('Étudiant')}</span>
                <span className="stat-label">Étudiant</span>
              </div>
              <div className="circle-stat">
                <span className="stat-number">{countByRole('Entreprise')}</span>
                <span className="stat-label">Entreprise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table des utilisateurs */}
      <div className="users-table">
        <h3>Liste des utilisateurs</h3>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CircleStatistics;
