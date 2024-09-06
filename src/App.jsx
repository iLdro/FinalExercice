import React, { useState } from 'react';
import Step from './Step';

const stepsData = [
  {
    title: "Étape 1",
    details: ["Détail 1", "Détail 2", "Détail 3"],
    hints: ["Indice 1 pour l'étape 1", "Indice 2 pour l'étape 1"]
  },
  {
    title: "Étape 2",
    details: ["Détail A", "Détail B", "Détail C"],
    hints: ["Indice 1 pour l'étape 2", "Indice 2 pour l'étape 2"]
  },
  {
    title: "Étape 3",
    details: ["Détail X", "Détail Y", "Détail Z"],
    hints: ["Indice 1 pour l'étape 3", "Indice 2 pour l'étape 3"]
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
