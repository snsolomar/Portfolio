import React from "react";
import AnimatedLetters from "../../Components/AnimatedLetters";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./Contact.scss";
import contactBanner from "../../Assets/Contact Me/contactBanner.jpeg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_tldjkge", form.current, "service_votfc98")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      {" "}
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full flex flex-col justify-center">
            <img
              src={contactBanner}
              alt="contact-banner"
              className="rounded-3xl"
            />
          </div>
          <div className="w-[300px] lg:w-full">
            <div className="container contact-page">
              <div className="contact-text-zone">
                <h1 className="text-title"> Contact Me</h1>
                <p>
                  I am an enthusiastic full-stack developer seeking a position
                  within a junior developer role. I graduated from an 18-week
                  software engineering immersive program with over 1000+ hours
                  of coding in an Agile environment.
                </p>
                <br />
                <p align="LEFT">
                  I pride myself on being a proactive team player, with a focus
                  on clear communication and collaboration to drive exceptional
                  results. My commitment to providing exceptional value to every
                  business I work with is unwavering. If you are interested in
                  discussing potential opportunities or collaborations, I would
                  be delighted to connect with you. Please don't hesitate to
                  reach out using the contact form provided below.
                </p>
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <ul>
                      <li className="half">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                        ></input>
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
                        <input
                          type="submit"
                          className="flat-button"
                          value="SEND"
                        />
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
