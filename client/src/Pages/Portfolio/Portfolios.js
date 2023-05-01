import React from "react";
import "./Portfolio.css";
import p1 from "../../Assets/Portfolio/p1.png";
import p2 from "../../Assets/Portfolio/p2.png";
import p3 from "../../Assets/Portfolio/p3.png";
import p4 from "../../Assets/Portfolio/p4.png";
import p5 from "../../Assets/Portfolio/p5.png";
import Portfolio from "./Portfolio";

const Portfolios = () => {
  const portfolios = [
    {
      image: p1,
      title: "Blue Ocean",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "https://github.com/snsolomar/instructor-hub-2",
    },
    {
      image: p2,
      title: "Items Detail Page",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "React",
      stack2: "CSS",
      stack3: "Bootstrap",

      gitHubLink: "https://github.com/snsolomar/AirBnB_UI_Clone",
    },
    {
      image: p3,
      title: "Weather App",
      description:
        "Weather application made using Jquery and asynchronous code. Integrated weather API to call data.",
      stack1: "Jquery",
      stack2: "HTML",
      stack3: "CSS",

      gitHubLink: "https://github.com/snsolomar/Weather-App",
    },
    {
      image: p4,
      title: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe web application made using React",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "https://github.com/snsolomar/tic-tac-toe-React-Project",
    },
    {
      image: p5,
      title: "Trivia",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "www.git",
    },
  ];
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
        {portfolios.map((portfolio, i) => (
          <Portfolio key={i} portfolio={portfolio}></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
