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
      image: p4,
      title: "Cassandra Discord Bot",
      description:
        "Cassandra is a Discord Community Bot designed with a focus on real-time interaction and community moderation. One of Cassandra's core functionalities is its ability to provide instantaneous responses to user queries. This feature allows users to get swift answers to their questions. Cassandra is equipped with advanced community moderation tools. Administrators can leverage the bot to kick, mute, or ban members, ensuring that community guidelines are upheld and any disruptive behavior is promptly addressed.",
      stack1: "JavaScript",
      stack2: "Express",
      stack3: "Node.js",

      gitHubLink: "https://github.com/snsolomar/Discord-Bot",
    },
    {
      image: p5,
      title: "Task Tracker",
      description:
        "The Task Tracker is a Full-Crud app constructed with the Angular framework. The interface allows users to input new tasks, amend existing ones, or delete completed tasks. Every task can be detailed with descriptions, deadlines, and priorities. Leveraging the strengths of Angular, this application ensures reliable real-time updates, with changes instantly reflecting across the application. ",
      stack1: "Angular",
      stack2: "TypeScript",
      stack3: "CSS",

      gitHubLink: "https://github.com/snsolomar/taskTrackerAngular",
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
