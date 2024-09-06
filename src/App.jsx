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
    details: ["Créer un header et lui ajouter un id header"],
    hints: ["Créer une balise header dans le body et lui mettre id=\"header\""]
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
    title : ["Ajouter un id au footer"],
    details : ["Ajouter l'id footer au footer"],
    hints : ["<footer id=\"footer\""]
  },







  {
    title: "Étape CSS",
    details: ["Créer le fichier style.css puis le relier au fichier HTML."],
    hints: ['Ajouter la ligne <link r"l="stylesheet] href="style.css"']
  },

  {
    title: "Étape CSS",
    details: ["Appliquer la couleur #4CAF50 au fond au hearder"],
    hints: ['a.	Pour modifier le header, écrire « header » en tant que sélecteur, puis ouvrir des accolades { }. Dans les accolades, écrire la propriété « background-color » pour modifier la couleur du fond. Appliquer la couleur à « #4CAF50 ».']
  },
  {
    title: "Etape CSS",
    details:["Mettre le texte du header en blanc"],
    hints:["Pour modifier la couleur du texte, écrire la propriété « color » dans les accolades du sélecteur « header ». Appliquer la couleur à « white ». "]
  },
  {
    title: "Etape CSS",
    details:["Changer notre class title définit précédemment pour que le text ait une taille de 24px, et une margin bottom de 10px"],
    hints : ["Ouvrir des accolades après le sélecteur « .title ». Écrire la propriété « font-size » pour modifier la taille du texte. Appliquer la taille à « 24px ». Écrire la propriété « margin-bottom » pour modifier la marge en bas du texte. Appliquer la marge à « 10px ». "]
  },
  {
    title: "Etape CSS",
    details:["Crer un grouping selector pour le header, footer et section"],
    hints : ["Pour créer un groupe de sélecteurs, écrire les sélecteurs « header, footer, section » séparés par des virgules. Ouvrir des accolades après les sélecteurs. Écrire les propriétés « font-family » et « color » pour modifier la police et la couleur du texte. Appliquer la police à « Arial » et la couleur à « black ». "]
  },
  {
    title: "Etape CSS",
    details:["Centrer le texte dans le groupe de sélecteurs"],
    hints : ["Pour centrer le texte, écrire la propriété « text-align » dans les accolades du groupe de sélecteurs. Appliquer l’alignement à « center ». "]
  },
  {
    title: "Etape CSS",
    details:["Ajouter au sélecteur des marges et du padding de 20px"],
    hints : [""]
  }

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
