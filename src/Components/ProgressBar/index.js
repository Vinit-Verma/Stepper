import React from "react";

const ProgressBar = ({ currentStepNumber }) => {
  return (
    <div className="progress-bar-div">
      <div
        className="progress-div"
        style={{
          transform: `Scalex(${
            currentStepNumber <= 3 ? currentStepNumber / 3 : 1
          })`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
