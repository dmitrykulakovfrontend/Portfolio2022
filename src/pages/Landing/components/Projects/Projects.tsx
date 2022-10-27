import React from "react";
import Section from "../Section";
import Project from "./components/Project";
import "./Projects.scss";

import paladinsDataSrc from "static/paladins-data.png";
import booksHut from "static/books-hut.jpeg";
import todoDaily from "static/todo-daily.png";

const projects = [
  {
    name: "Todo Daily",
    description: "To-do CRUD application with storing data in local storage.",
    bulletPoints: [
      "Pure JavaScript for manipulations with DOM.",
      "Ability to write tasks for a future week or change the previous week tasks",
    ],
    startDate: new Date(2022, 2, 1),
    endDate: new Date(2022, 3, 1),
    stack: "HTML, CSS, JavaScript",
    src: todoDaily,
    dark: true,
    github: "https://github.com/dmitrykulakovfrontend/Todo-daily",
    website: "https://dmitrykulakovfrontend.github.io/Todo-daily/",
  },
  {
    name: "Books Hut",
    description:
      "Website library with the ability to create an account, and download/read/save books in your account.",
    bulletPoints: [
      "Secured user authentication and stored book data by utilizing Redis and PostgreSQL.",
      "Designed with Figma and styled with SCSS.",
      "Lead front end by collaborating with a server-side team.",
      "Implemented TypeScript for type data management.",
    ],
    startDate: new Date(2022, 7, 1),
    endDate: new Date(2022, 8, 1),
    stack: "React, Node.js, Typescript, Redis, Postgress, SCSS",
    src: booksHut,
    github: "https://github.com/dmitrykulakovfrontend/Books-Hut",
    website: "https://books-hut.netlify.app/  ",
  },
  {
    name: "Paladins Data",
    description:
      "Web Application that uses Hi-Rez Studios API to show user statistics in the game 'Paladins'.",
    bulletPoints: [
      "All data stored in MongoDB, Apollo GraphQL is used to view and modify data.",
      "For styling used SCSS + MUI library.",
      "Back-End built with Express and for working with API using community API wrapper.",
    ],
    startDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 2, 1),
    stack: "React, Node.js, MongoDB, Express, GraphQL",
    src: paladinsDataSrc,
    github: "https://github.com/dmitrykulakovfrontend/Paladins-Data",
    website: "https://paladinsdata.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <Section title="Projects">
      <ul className="projects">
        {projects.map((project, i) => (
          <Project {...project} key={i} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
