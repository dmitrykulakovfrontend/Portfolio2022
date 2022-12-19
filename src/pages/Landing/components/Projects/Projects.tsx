import React from "react";
import Section from "../Section";
import Project from "./components/Project";
import "./Projects.scss";

import paladinsData from "static/paladins-data.webp";
import booksHut from "static/books-hut.webp";
import todoDaily from "static/todo-daily.webp";
import interviewPlayBook from "static/interview-play-book.webp";

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
      "Used Apollo GraphQL and MongoDB to store and manage data",
      "Styled with SCSS and the MUI library",
      "Implemented a backend with Express and used an API wrapper to work with the API",
      "Successfully finished this full-stack project in just one month, demonstrating the ability to learn and adapt quickly.",
    ],
    startDate: new Date(2022, 1, 1),
    endDate: new Date(2022, 2, 1),
    stack: "React, Node.js, MongoDB, Express, GraphQL",
    src: paladinsData,
    github: "https://github.com/dmitrykulakovfrontend/Paladins-Data",
    website: "https://paladins-data.vercel.app/",
  },
  {
    name: "Interview PlayBook",
    description:
      "Full-stack application to improve answers in interviews by completing quizzes!",
    bulletPoints: [
      "Built with Next.js and TypeScript for server-rendered React apps with improved type safety",
      "Used tRPC for efficient, type-safe communication between the client and server, with Prisma for data access and manipulation",
      "Applied a modern design system with Tailwind CSS for styling and layout",
      "Implemented NextAuth.js for secure, flexible user authentication with JWT (JSON Web Tokens)",
    ],
    startDate: new Date(2022, 10, 1),
    endDate: new Date(2022, 11, 16),
    stack: "Next.js, TypeScript, tRPC, Prisma, Tailwind",
    src: interviewPlayBook,
    github: "https://github.com/dmitrykulakovfrontend/InterviewPlayBook",
    website: "https://interviewplaybook.vercel.app/",
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
