import React from "react";
import "./Portfolio.css";
import p1 from "../../Assets/Portfolio/p1.png";

const Portfolio = ({ portfolio }) => {
  const { image, title, description, gitHubLink, stack1, stack2, stack3 } =
    portfolio;

  return (
    <div className="w-[350px] mx-10 lg:w-full portfolio-card">
      <div className="card w-[300px] lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="portfolio" />
        </figure>
        <div className="card-body">
          <h2 className="card-title block">
            {title}
            <br></br>
            <div className="badge badge-info mr-2">{stack1}</div>
            <div className="badge badge-info mr-2">{stack2}</div>
            <div className="badge badge-info mr-2">{stack3}</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={gitHubLink} className="portfolio-button-github">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
