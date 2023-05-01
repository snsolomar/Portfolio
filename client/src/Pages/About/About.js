import React from "react";
import SkillsCloud from "../../Components/TagCloud";
import Loader from "react-loaders";

const About = () => {
  return (
    <div>
      <div className="bg-base-200 p-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full flex flex-col justify-center">
            <h1 className="lg:text-5xl font-bold">About Me</h1>
            <p className="py-6 lg:text-lg text-sm">
              {" "}
              Welcome! Thank you for taking the time to visit my corner of the
              internet. My name is Simon, an Army veteran and first-generation
              American from Los Angeles, CA. I'm passionate about competitive
              gaming, economics, painting, weightlifting, and programming. My
              diverse upbringing and military experience as a Tank Platoon
              Leader and Headquarters Company XO have instilled in me
              adaptability, open-mindedness, and resilience.
            </p>

            <p>
              During my time in the Army, I witnessed the power and potential of
              technology in streamlining communication, analyzing data, and
              making critical decisions. This inspired me to pursue a career in
              the Tech industry, with a focus on programming, systems
              integration, and software development.
            </p>
            <br />
            <p>
              As I transition into the Tech world, I am excited to apply the
              leadership, problem-solving, and adaptability skills honed during
              my military service to new challenges and opportunities. I am
              dedicated to making a meaningful impact in this rapidly evolving
              field.
            </p>
          </div>
          <div className="w-[300px]">
            <SkillsCloud></SkillsCloud>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default About;
