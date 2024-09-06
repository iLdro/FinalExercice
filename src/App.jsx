import React, { useState } from 'react';
import Step from './Step';

const stepsData = [
  {
    title: "Fichier HTML",
    details: ["Créer une structure HTML en utilisant le raccourci et changer le titre de la page"],
    hints: ["Utiliser le raccourci ! + entrer", "Utiliser la balise <title>"]
  },
  {
    title: "Hearder",
    details: ["Créer un header"],
    hints: ["Créer une balise header dans le body"]
  },
  {
    title: "Titre",
    details: ["Ajouter un titre : Bienvenue sur le site d'apprentissage du HTML & CSS de Larache dans une classe"],
    hints: ["Utiliser la balise h1 et un attribut : class"]
  },
  {
    title: "Navgation Bar",
    details: ["Ajouter dans le header un menu de navigation. Utiliser une liste non ordonée. Cette liste devra contenir des liens vers les sections A Propos, Services et Contact"],
    hints: ["Utiliser les balises <nav>, <ul>, <li>, <a> et l'attribut href"]
  },
  {
    title: "Section A Propos partie 1",
    details: ["Créer la section A Propos sous le header avec un ID : about"],
    hints: ["Utiliser la balise <section> et l'attribut id"]
  },
  {
    title: "Section A Propos partie 2",
    details: ["Dans la section, ajoute un titre avec le texte : A propos puis ajoute un paragraphe avec ce texte :Nous sommes des étudiants experts en HTML/CSS de Larache."],
    hints: ["Utilise les balises <h2> et <p>"]
  },
  {
    title: "Section Services partie 1",
    details: ["Créer la section Services, avec un id = services"],
    hints: ["Utiliser la balise <section> et l'attribut id"]
  },
  {
    title: "Section Services partie 2",
    details: ["Dans cette section ajoute le titre : Service et un paragraphe de texte avec :Utiliser la balise <section> et l'attribut id"],
    hints: ["Utilise les balises <h2> et <p>"]
  },
  {
    title: "Section Contact partie 1",
    details: ["Créer la section Contact, avec un id = contact"],
    hints: ["Utiliser la balise <section> et l'attribut id"]
  },
  {
    title: "Section Contact partie 2",
    details: ["Ajoute un titre : Contact"],
    hints: ["Utilise la balise <h2>"]
  },
  {
    title: "Sectopn Contact partie 3 (Formulaire)",
    details: ["Créer un formulaire, avec un id contact-form. Ce formulaire doit pouvoir prendre en entrée le nom et l'email d'une personne et il doit y avoir un bouton pour envoyer le resultat"],
    hints: ["Pour réaliser le formulaire il faudra utiliser la balise <form>, une syntaxe de ce type pour le nom et l'email : <label for='name'>Nom :</label> et la balise <button> avec un type submit"]
  },
  {
    title: "Étape 12",
    details: ["Ajouter un footer avec le texte suivant : &copy; 2024 Mon site avec Train d'Avenir"],
    hints: ["Utilisez les balises <footer> et <p>"]
  },







  {
    title: "Étape CSS",
    details: ["Créer le fichier style.css puis le relier au fichier HTML."],
    hints: ['Ajouter la ligne <link r"l="stylesheet] href="style.css"']
  },

  {
    title: "Étape CSS",
    details: ["ModifierL."],
    hints: ['Ajouter la ligne <link rel="stylesheet" href="style.css"']
  },

  // Ajoute plus d'étapes si nécessaire
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resetDetailLevel, setResetDetailLevel] = useState(false);

  const nextStep = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
      setResetDetailLevel(true);  // Indiquer que le niveau de détail doit être réinitialisé
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setResetDetailLevel(true);  // Indiquer que le niveau de détail doit être réinitialisé
    }
  };

  return (
    <div className="App">
      <h1>Site Étapes avec indices</h1>
      <Step step={stepsData[currentStep]} resetDetailLevel={resetDetailLevel} setResetDetailLevel={setResetDetailLevel} />
      <button onClick={prevStep} disabled={currentStep === 0}>Étape précédente</button>
      <button onClick={nextStep} disabled={currentStep === stepsData.length - 1}>Étape suivante</button>
    </div>
  );
};

export default App;
