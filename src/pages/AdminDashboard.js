import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import GestionUtilisateurs from "./GestionUtilisateurs";
import ParametrageEmails from "./ParametrageEmails";
import ValidationSujets from "./ValidationSujets";
import PlanificationSoutenances from "./PlanificationSoutenances";
import SuiviEntreprises from "./SuiviEntreprises";
import "./AdminDashboard.css";  // Assure-toi que le fichier CSS est importé ici

const AdminDashboard = () => {
  // Variable d'état pour suivre la section active dans le tableau de bord
  const [activeSection, setActiveSection] = useState("welcome");

  // Fonction pour rendre le contenu de la section active
  const renderContent = () => {
    switch (activeSection) {
      case "manageUsers":
        return <GestionUtilisateurs />; // Gestion des utilisateurs
      case "manageEmails":
        return <ParametrageEmails />; // Paramétrage des emails
      case "validateSubjects":
        return <ValidationSujets />; // Validation des sujets
      case "scheduleDefense":
        return <PlanificationSoutenances />; // Planification des soutenances
      case "followCompanies":
        return <SuiviEntreprises />; // Suivi des entreprises partenaires
      default:
        // Message de bienvenue par défaut si aucune section n'est sélectionnée
        return (
          <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            Bienvenue dans votre tableau de bord administrateur !
          </h2>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      {/* En-tête du tableau de bord administrateur */}
      <Header />
      <div style={{ display: "flex" }}>
        {/* Barre latérale avec le menu de navigation pour l'administrateur */}
        <Sidebar
          role="admin"
          userName="Admin Nadira" // Nom de l'administrateur (à remplacer par dynamique)
          userProfilePic="/images/admin-profile.jpg" // Image de profil (à remplacer par dynamique)
          onMenuClick={setActiveSection} // Fonction pour changer la section active
        />
        {/* Contenu principal affiché à droite de la barre latérale */}
        <div
          style={{
            marginLeft: "240px", // Compense la largeur de la Sidebar
            marginTop: "60px", // Compense la hauteur du Header
            padding: "20px",
            width: "100%",
          }}
        >
          {renderContent()} {/* Contenu dynamique basé sur la section active */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
