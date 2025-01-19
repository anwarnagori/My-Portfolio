import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.css";

// Dummy Line component (for progress bars)
const Line = ({ percent }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inner"
        style={{ width: `${parseInt(percent)}%` }} // Ensure the percentage is numeric
      />
    </div>
  );
};

const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "50",
      },
      {
        skillName: "BOOTSTRAP",
        percentage: "100",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "85",
      },
      {
        skillName: "REACT",
        percentage: "60",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, index) => {
          return (
            <div key={index} className="skills__content-wrapper__inner-content">
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skillsItem, j) => {
                  return (
                    <div className="progressbar-wrapper" key={j}>
                      <p>{skillsItem.skillName}</p>
                      <Line percent={skillsItem.percentage} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
