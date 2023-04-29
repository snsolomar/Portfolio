import React, { useState } from "react";
import bannerImg from "../../Assets/Banner/solomar.jpg";
import { Link } from "react-router-dom";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import AnimatedLetters from "../../Components/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["S", "i", "m", "o", "n"];
  const jobArray = [
    "W",
    "e",
    "b",
    "",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  //grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3 - assigns grid space on lg and sml mobile view
  //className="w-[300px] provides a fixed size of 300px in mobile view
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[380px] lg:w-full">
            <Link to="/about">
              <img
                src={bannerImg}
                alt="Banner"
                className="hover:border-2 rounded-3xl"
              />
            </Link>
          </div>
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <span className={`${letterClass} _15`}> </span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2 className="w-[300px]  lg:w-full">
              Full-Stack Developer / Javascript / Management
            </h2>
            <Link to="/contact" className="flat-button">
              Contact Me
            </Link>
            {/* <Link
              className="linkedIn-button"
              to="https://www.linkedin.com/in/solomar/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </Link>
            <Link className="github-button" to="https://github.com/snsolomar">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
