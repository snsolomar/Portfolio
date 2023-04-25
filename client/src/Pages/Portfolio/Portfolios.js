import React from "react";
import "./Portfolio.css";
import p1 from "../../Assets/Portfolio/p1.png";
import p2 from "../../Assets/Portfolio/p2.png";
import Portfolio from "./Portfolio";
const Portfolios = () => {
  const portfolios = [
    {
      image: p1,
      title: "Blue Ocean",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "Javascript",

      gitHubLink: "www.git",
    },
    {
      image: p2,
      title: "Items Detail Page",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "Javascript",

      gitHubLink: "www.git",
    },
    {
      image: p1,
      title: "Blue Ocean",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "Javascript",

      gitHubLink: "www.git",
    },
    {
      image: p1,
      title: "Item Detail UI",
      description:
        "This is a Front End Capstone project where built a seamless single page for item details. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "Javascript",

      gitHubLink: "www.git",
    },
    {
      image: "",
      title: "Blue Ocean",
      description:
        "This is a web application used for grading class assignmens. I used HTML, CSS, Javascript, and React for this project. In the backend, I used PostgreSQL, Express, and Node.js",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "Javascript",

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
