import React, { useState, useEffect } from 'react';

const Step = ({ step, resetDetailLevel, setResetDetailLevel }) => {
  const [detailLevel, setDetailLevel] = useState(1);
  const [hintIndex, setHintIndex] = useState(-1);

  // Réinitialise le niveau de détail et l'indice lorsque resetDetailLevel est vrai
  useEffect(() => {
    if (resetDetailLevel) {
      setDetailLevel(1);  // Remet à 1 pour commencer à afficher à partir du 1er détail
      setHintIndex(-1);   // Réinitialise les indices
      setResetDetailLevel(false); // Désactive la réinitialisation
    }
  }, [resetDetailLevel, setResetDetailLevel]);

  const showMoreDetails = () => {
    if (detailLevel < step.details.length) {
      setDetailLevel(detailLevel + 1);
    }
  };

  const showHint = () => {
    if (hintIndex < step.hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
  };

  return (
    <div className="step">
      <h2>{step.title}</h2>
      <div className="details">
        {step.details.slice(0, detailLevel).map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
        {detailLevel < step.details.length && (
          <button onClick={showMoreDetails}>Afficher plus de détails</button>
        )}
      </div>
      <div className="hints">
        {hintIndex >= 0 && <p>{step.hints[hintIndex]}</p>}
        {hintIndex < step.hints.length - 1 && (
          <button onClick={showHint}>Afficher un indice</button>
        )}
      </div>
    </div>
  );
};

export default Step;
