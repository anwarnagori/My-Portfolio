import React from "react";
import "./style.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Muhammad Anwer
          <br />
          Front end developer
        </h1>
      </div>
      <div className="home__contect-me">
        <a
          href="src/containers/home/CV - MUHAMMAD ANWER.pdf_20250119_125735_0000.pdf"
          download
        >
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
