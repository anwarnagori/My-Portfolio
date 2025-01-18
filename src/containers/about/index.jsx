import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

const personalInformation = [
  {
    label: "Name",
    value: "Muhammad Anwer",
  },
  {
    label: "Age",
    value: "27",
  },
  {
    label: "Address",
    value: "Pakistan",
  },
  {
    label: "Email",
    value: "anwerrehman05@gmail.com",
  },
  {
    label: "Contact No",
    value: "+92 3110339169",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div>
        <h3>Front End Developer</h3>
        <p>
          As a passionate and detail-oriented Front-End Developer, I specialize
          in creating intuitive, responsive, and visually appealing web
          experiences. With expertise in HTML, CSS, JavaScript, and modern
          front-end frameworks like React and Vue.js, I focus on writing clean,
          efficient code that ensures high performance and seamless user
          interactions. I am dedicated to delivering websites that are not only
          aesthetically pleasing but also function flawlessly across all devices
          and platforms. Constantly keeping up with the latest industry trends
          and best practices, I am committed to continuous learning and
          improving my skills to meet the dynamic needs of the digital world.
        </p>
        <h3>Personal Information</h3>
        <ul>
          {personalInformation.map((item, index) => {
            return (
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default About;
