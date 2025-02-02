import React from "react";
import "./style.css";
import Child from "./Child";
import Items from "./Items";

const Parent = () => {
  return (
    <div className="container">
      {Items.map((item) => {
        return (
          <Child
            key={item.id}
            icon={item.icon}
            skill={item.skill}
            percentage={item.percentage}
          />
        );
      })}
    </div>
  );
};

export default Parent;
