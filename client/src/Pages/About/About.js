import React from "react";
import SkillsCloud from "../../Components/TagCloud";
import Loader from "react-loaders";

const About = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full flex flex-col justify-center">
            <h1 className="lg:text-5xl font-bold">About Me</h1>
            <p className="py-6 lg:text-lg text-sm">
              {" "}
              Welcome! Thank you for taking the time to visit my corner of the
              internet. My name is Simon, and I enjoy creating user-friendly web
              applications. My interest in programming began in September 2021
              while I was searching for hobbies I could be passionate about
              during my transition out of the military.
            </p>
            <br />

            <p>
              It was fascinating to see the applications that could be built
              with just a little knowledge, and I began to wonder how I could
              turn this newfound passion into a career. In Feb 2023, I graduated
              from one of the most reputable bootcamps and began my early career
              in software development. I'm a very ambitious full-stack developer
              looking for a role in an established IT company with the
              opportunity to work with the latest technologies on challenging
              and diverse projects.
            </p>
          </div>
          <div className="w-[300px] lg:w-full">
            <SkillsCloud></SkillsCloud>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default About;
