import "./index.css";
import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

const SkillsCloud = () => (
  <div className="Cloud-container">
    {" "}
    {/* <div className="Skills">Skills</div> */}
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
      // onClickOptions={{ passive: true }}
    >
      {[
        "Git",
        "SQL",
        "Javascript",
        "Java",
        "C#",
        "Testing",
        "Sass",
        "React",
        "Docker",
        "AWS",
        "Jest",
        "Sellenium",
        "Linux",
        "PostgreSQL",
        "MongoDB",
        "Redux",
        "HTML5",
        "CSS3",
        "K6",
        "JQuery",
        "Restful API Development",
      ]}
    </TagCloud>
  </div>
);

export default SkillsCloud;
