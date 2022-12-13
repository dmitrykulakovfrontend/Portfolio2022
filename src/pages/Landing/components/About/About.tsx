import React from "react";
import Section from "../Section";
import "./About.scss";

import profileImg from "static/profile.webp";
import InfoList from "./components/InfoList";

const profile = {
  hobbies: "Books, video-games",
  goal: "Develop products with great user experience",
  city: "Moscow, Russia",
  email: "atomeistee@gmail.com",
  technologies: "TanStack, tRPC, TypeScript, Tailwind",
  freelance: "Available",
};

const bulletPoints = [
  "Self-taught front-end software engineer with great experience in web development and React.",
  "Worked with: MongoDB, Express, React, Node.js, TanStack products, tRPC, Prisma, Typescript, and Next.",
  "Collaborated with many other web developers in eager to create a successfull applications.",
  "Have experience with GitHub flow and git.",
  "Looking for a remote job with a team that is really love what they are doing, and ready to share their excitement.",
  "Check out my portfolio page and projects, including Books Hut, Paladins Data, and Todo Daily.",
];

const About = () => {
  return (
    <Section title="About" info="Here you can learn about me">
      <div className="about">
        <img className="about__profile" src={profileImg} alt="profile" />
        <div className="about__text">
          <h3 className="about__welcome">Hi, I&apos;m Dmitry!</h3>
          <h4 className="about__title">Front End Developer.</h4>
          <p className="about__info">
            I am a Web Developer from Russia with a good experience in
            collaboration with developers and people.
          </p>
          <InfoList profile={profile} />
          <ul className="about__bullet-list">
            {bulletPoints.map((bullet, i) => (
              <li key={i} className="about__bullet">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="about__description">
            I am a self-taught front-end software engineer based in Moscow,
            Russia. I have good experience in web development and have used many
            different technologies in projects where I developed, such as:
            MongoDB, Express, React, Node.js, TanStack products, tRPC, Prisma,
            Typescript, and Next. I have honed these skills through self-study,
            collaboration with other developers, and hands-on experience
            creating full-stack applications. I am proficient in using GitHub
            Flow to work efficiently with a team.
          </p>
          <p className="about__description">
            I am currently looking for a remote job that allows me to work with
            a team that really enjoy web development. I am a proactive and
            reliable team member who is dedicated to delivering high-quality
            results.
          </p>
          <p className="about__description">
            In addition to my experience and skills, I have a portfolio of
            projects that showcases my capabilities as a front-end software
            engineer. These projects include a website library with the ability
            to create an account and access a wide range of books, a web
            application that uses Hi-Rez Studios API to show user statistics
            from the game called Paladins, and a CRUD task-oriented application
            that stores data in LocalStorage.
          </p>
          <p className="about__description">
            Thank you for considering me for your web development needs. I am
            eager to put my skills to use in a new role and contribute to the
            success of your team.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
