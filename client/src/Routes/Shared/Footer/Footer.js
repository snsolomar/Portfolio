import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4 w-[300px] lg:w-full">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/solomar/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/snsolomar"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
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
