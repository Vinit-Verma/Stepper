import React from "react";

const NumberCard = ({ currentStepNumber, num, stepName }) => {
  return (
    <div className="card-div">
      <span
        className={
          currentStepNumber >= num ? "step-complete num-span" : "num-span"
        }
      >
        {currentStepNumber >= num ? "\u2713" : num}
      </span>
      <span className="stepName-span">{stepName}</span>
    </div>
  );
};

export default NumberCard;
