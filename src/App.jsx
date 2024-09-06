import React, { useState } from 'react';
import Step from './Step';

const stepsData = [
  {
    title: "Fichier HTML",
    details: ["Créer une structure HTML en utilisant le raccourci et changer le titre de la page"],
    hints: ["Utiliser le raccourci ! + entrer", "Utiliser la balise <title>"]
  },
  {
    title: "Header",
    details: ["Créer un header et lui ajouter un id header"],
    hints: ["Créer une balise header dans le body et lui mettre id=\"header\""]
  },
  {
    title: "Titre",
    details: ["Ajouter un titre : Bienvenue sur le site d'apprentissage du HTML & CSS de Larache dans une classe"],
    hints: ["Utiliser la balise h1 et un attribut : class"]
  },
  {
    title: "Navigation Bar",
    details: ["Ajouter dans le header un menu de navigation. Utiliser une liste non ordonée. Cette liste devra contenir des liens vers les sections A Propos, Services et Contact"],
    hints: ["Utiliser les balises <nav>, <ul>, <li>, <a> et l'attribut href vers les ID #about, #services et #contact."]
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
    title: "Ajouter un footer",
    details: ["Ajouter un footer avec le texte suivant : &copy; 2024 Mon site avec Train d'Avenir"],
    hints: ["Utilisez les balises <footer> et <p>"]
  },
  {
    title : ["Ajouter un ID au footer"],
    details : ["Ajouter l'id footer au footer"],
    hints : ["<footer id=\"footer\""]
  },







  {
    title: "Créer et utiliser son fichier",
    details: ["Créer le fichier style.css puis le relier au fichier HTML."],
    hints: ['Ajouter la ligne <link rel="stylesheet" href="style.css"']
  },

  {
    title: "Modifier le header partie 1",
    details: ["Appliquer la couleur #4CAF50 au fond au header en utilisant son ID"],
    hints: ['Pour modifier le header, écrire « #header » en tant que sélecteur, puis ouvrir des accolades { }. Dans les accolades, écrire la propriété « background-color » pour modifier la couleur du fond. Appliquer la couleur à « #4CAF50 ».']
  },
  {
    title: "Modifier le header partie 2",
    details:["Mettre le texte du header en blanc"],
    hints:["Pour modifier la couleur du texte, écrire la propriété « color » dans les accolades du sélecteur « header ». Appliquer la couleur à « white ». "]
  },
  {
    title: "Modifier le titre",
    details:["Changer notre class title définit précédemment pour que le texte ait une taille de 24px, et une marge de 10px en dessous."],
    hints : ["Ouvrir des accolades après le sélecteur « .title ». Écrire la propriété « font-size » pour modifier la taille du texte. Appliquer la taille à « 24px ». Écrire la propriété « margin-bottom » pour modifier la marge en bas du texte. Appliquer la marge à « 10px ». "]
  },
  {
    title: "Grouping Selector partie 1",
    details:["Créer un grouping selector pour le header, footer et section"],
    hints : ["Pour créer un groupe de sélecteurs, écrire les sélecteurs « header, footer, section » séparés par des virgules. Ouvrir des accolades après les sélecteurs. Écrire les propriétés « font-family » et « color » pour modifier la police et la couleur du texte. Appliquer la police à « Arial » et la couleur à « black ». "]
  },
  {
    title: "Grouping Selector partie 2",
    details:["Centrer le texte dans le groupe de sélecteurs"],
    hints : ["Pour centrer le texte, écrire la propriété « text-align » dans les accolades du groupe de sélecteurs. Appliquer l’alignement à « center ». "]
  },
  {
    title: "Grouping Selector partie 3",
    details:["Ajouter au sélecteur des marges et du padding de 20px"],
    hints : ["Ajouter les lignes margin:20px; et padding:20px;"]
  },

  {
    title: "Modifier le style global avec body",
    details:["Modifier la police des textes dans body en Arial"],
    hints : ["Ecrire body en tant que sélecteur et écrire font-family:Arial, sans-sherif;"]
  },

  {
    title: "Modifier le style global avec body",
    details:["Supprimer les marges et les paddings."],
    hints : ["Fixer margin:0px; et padding:0px;"]
  },

  {
    title: "Modifier la liste de navigation - ul",
    details:["Définir ul en tant que sélecteur, puis supprimer les puces de la liste avec list-style-type:none;. Ensuite, enlever le padding."],
    hints : ["ul {\nlist-style-type:none;\npadding:0;\n}"]
  },

  {
    title: "Modifier la liste de navigation - ul li",
    details:["Afficher les éléments en ligne. Ajouter une marge latérale de 10px pour les espacer."],
    hints : ["Pour aligner des éléments, il faut utiliser display:inline. Pour ajouter une marge latérale, il faut ajouter 10px uniquement à droite et à gauche. ul li {\ndisplay:inline;\nmargin:0 10px;\n}"]
  },

  {
    title: "Modifier la liste de navigation - ul a",
    details:['Mettre le texte des liens (balise <a>) en blanc. Supprimer les soulignements avec "text-decoration:none"'],
    hints : ["ul a {color:white; text-decoration:none;}"]
  },

  {
    title: "Styliser le formulaire",
    details:["On va utiliser un Grouping Selector pour cibler les champs <input> et <button>."],
    hints : ['Le sélecteur doit ressembler à : "input, button". On ouvre ensuite les accolades.']
  },

  {
    title: "Styliser le formulaire",
    details:["Ajouter une marge verticale et un padding de 10."],
    hints : ['Après les sélecteurs, ajouter entre les accolades "margin:10px 0; padding:10px;']
  },

  {
    title: "Styliser le formulaire",
    details:['Ajouter une bordure avec la ligne "border:1px solid #ccc". Ajuster ensuite la largeur à 80% en ajoutant la ligne "width:80%;"'],
    hints : ['Le style du formulaire doit ressembler à cela : "input, button { margin:10px 0; padding:10px; border: 1px solid #ccc; width: 80%;}"']
  },

  {
    title: "Styliser le bouton",
    details:['Avec le selecteur "button", mettre le background en blanc et supprimer la bordure. Enfin ajouter la ligne "cursor:pointer" pour changer le curseur au survol du bouton.'],
    hints : ['button { background:white; border: none; cursor:pointer;}']
  },

  {
    title: "Styliser le bouton :hoover",
    details:['Nous allons faire en sorte que la couleur du bouton change quand on le survole avec la souris. Créer un nouveau sélecteur "button:hoover" avec la propriété "background-color:#45a049".'],
    hints : ['button:hoover { background:#45a049; }']
  },

  {
    title: "Modifier le footer",
    details:['Modifier le le footer en utilisant son ID. Mettre la couleur du background à #333, mettre le texte en blanc et ajouter un padding de 10px.'],
    hints : ['#footer { background:#333; color:white; padding:10px; }']
  },

  {
    title: "C'est fini !",
    details:['Vous avez fini. Si vous vous ennuyez, vous pouvez visiter les sites suivants : https://flukeout.github.io/ ou https://flexboxfroggy.com'],
    hints : ['🥳']
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
