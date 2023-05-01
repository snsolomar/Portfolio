import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded w-[100%] lg:w-full">
      <div>
        <div className="grid grid-flow-col gap-4 w-[100%] lg:w-full">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/solomar/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="3x" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/snsolomar"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="3x" />
          </a>
        </div>
      </div>
      <div>
        <p>©2023 Simon Solomon. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
