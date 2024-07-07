import { useState } from "react";
import "./App.css";
import NumberCard from "./Components/NumberCard";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const stepNumbers = [
    { step: 1, stepName: "Customer Info" },
    { step: 2, stepName: "Shipping Info" },
    { step: 3, stepName: "Payment" },
    { step: 4, stepName: "Delivered" },
  ];

  const [currentStepNumber, setCurrentStepNumber] = useState(0);

  const handleButtonClick = () => {
    if (currentStepNumber < 4) {
      setCurrentStepNumber((prev) => prev + 1);
    } else {
      setCurrentStepNumber(0);
    }
  };

  return (
    <div className="center">
      <div className="number-wrapper">
        <ProgressBar currentStepNumber={currentStepNumber} />
        {stepNumbers.map((item, index) => {
          return (
            <NumberCard
              key={index}
              currentStepNumber={currentStepNumber}
              num={item.step}
              stepName={item.stepName}
            />
          );
        })}
      </div>
      <input
        className="next-button"
        type="button"
        value={currentStepNumber < 4 ? "Next" : "Reset"}
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
