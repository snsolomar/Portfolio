import React from "react";
import AnimatedLetters from "../../Components/AnimatedLetters";
import { useEffect, useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="contact-text-zone">
          <h1 className="text-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              //1.5s delay of animation
              idx={15}
            />
          </h1>
          <p>
            I am an enthusiastic full-stack developer seeking a position within
            a junior developer role. I graduated from an 18-week software
            engineering immersive program with over 1000+ hours of coding in an
            Agile environment.
          </p>
          <br />
          <p align="LEFT">
            As a proactive team player, I am intentional about communicating and
            collaborating for the best results. In addition to this, I care a
            lot about the value I prove for every business I work with. I'm very
            young in my career, but I promise to provide a significant impact to
            your team.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name"></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
