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
        "Grading web application streamlines the process of evaluating class assignments and tracking student performance. The backend is supported by PostgreSQL, Express, and Node.js, ensuring a reliable and efficient data management system. Instructors can create groups, add students, and grade assignments with ease. The application automatically calculates and updates students' average scores, which are then displayed in a visually appealing and informative graph.",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "https://github.com/snsolomar/instructor-hub-2",
    },
    {
      image: p2,
      title: "Items Detail Page",
      description:
        "Hotel reservation web application serves as an item detail page, providing essential information for customers seeking accommodations. Developed using HTML, CSS, JavaScript, and React, the frontend delivers a visually engaging and user-friendly experience. The application allows users to easily browse through available rooms, view high-quality images, and read detailed descriptions, as well as check availability and pricing for their desired stay dates.",
      stack1: "React",
      stack2: "CSS",
      stack3: "Bootstrap",

      gitHubLink: "https://github.com/snsolomar/AirBnB_UI_Clone",
    },
    {
      image: p3,
      title: "Weather App",
      description:
        "Weather application is built using jQuery and asynchronous code to deliver a seamless user experience. By integrating a robust weather API, the app retrieves real-time weather data for any entered city. Users simply input the city name and the application fetches the relevant data. This application is designed to be both lightweight and highly responsive.",
      stack1: "Jquery",
      stack2: "HTML",
      stack3: "CSS",

      gitHubLink: "https://github.com/snsolomar/Weather-App",
    },
    {
      image: p4,
      title: "Tic-Tac-Toe",
      description:
        "Tic-tac-toe web application offers users a fresh take on the classic game. One standout feature of this tic-tac-toe app is its ability to remember each move made by the user. This functionality allows players to seamlessly undo any mistakes, providing an opportunity for strategic reconsideration and improving their chances of winning.",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "https://github.com/snsolomar/tic-tac-toe-React-Project",
    },
    {
      image: p5,
      title: "Trivia",
      description:
        "Trivia web application delivers a captivating and challenging experience for players, drawing inspiration from the classic game show format. The modular nature of JSX components also makes it easy to implement design changes, resulting in a highly maintainable and scalable application. The application leverages an API to gather a diverse array of categories and questions.",
      stack1: "React",
      stack2: "PostgreSQL",
      stack3: "Express",

      gitHubLink: "https://github.com/snsolomar/mcsp-the-answer-is-react",
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
