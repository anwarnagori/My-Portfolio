import React, { useState } from "react";

const Child = ({ icon, skill, percentage }) => {
  const [style, setStyle] = useState();

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${percentage}`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <div className="child">
      <div className="content">
        <div className="left">{icon}</div>
        <div className="right">
          <h2>{skill}</h2>
          <div className="skill-bar">
            <div className="progress" style={style}>
              <span>{percentage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
