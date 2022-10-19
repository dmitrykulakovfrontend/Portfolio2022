import React from "react";
import Section from "../Section";
import "./About.scss";

import profileImg from "static/profile-img.jpg";
import InfoList from "./components/InfoList";

const profile = {
  birthday: "22 December 2003",
  age: "18",
  city: "Moscow, Russia",
  email: "atomeistee@gmail.com",
  experience: "1 year of Web Development",
  freelance: "Available",
};

const About = () => {
  return (
    <Section title="About" info="Here you can learn about me">
      <div className="about">
        <img className="about__profile" src={profileImg} alt="profile" />
        <div className="about__text">
          <h3 className="about__title">Front End Developer.</h3>
          <p className="about__info">
            I am a Web Developer from Russia with a good experience in
            collaboration with developers and people.
          </p>
          <InfoList profile={profile} />
          <p className="about__description">
            Collaborated with other web developers in projects. Created full
            stack MERN application. Self-taught web developer. 1 year of Web
            Development and JavaScript/React. Used GitHub Flow during working
            with other developers. Currently Looking for a remote job with
            friendly and communicative team. Scrum/Agile methodologies in
            priority.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
