import React from "react";
import Section from "../Section";
import Project from "./components/Project";
import "./Projects.scss";

import paladinsData from "static/paladins-data.webp";
import booksHut from "static/books-hut.webp";
import todoDaily from "static/todo-daily.webp";
import interviewPlayBook from "static/interview-play-book.webp";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Todo Daily",
      description: t("projects.Todo Daily.description"),
      bulletPoints: t("projects.Todo Daily.bulletPoints", {
        returnObjects: true,
      }),
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
      description: t("projects.Books Hut.description"),
      bulletPoints: t("projects.Books Hut.bulletPoints", {
        returnObjects: true,
      }),
      startDate: new Date(2022, 7, 1),
      endDate: new Date(2022, 8, 1),
      stack: "React, Node.js, Typescript, Redis, Postgress, SCSS",
      src: booksHut,
      github: "https://github.com/dmitrykulakovfrontend/Books-Hut",
      website: "https://books-hut.netlify.app/  ",
    },
    {
      name: "Paladins Data",
      description: t("projects.Paladins Data.description"),
      bulletPoints: t("projects.Paladins Data.bulletPoints", {
        returnObjects: true,
      }),
      startDate: new Date(2022, 1, 1),
      endDate: new Date(2022, 2, 1),
      stack: "React, Node.js, MongoDB, Express, GraphQL",
      src: paladinsData,
      github: "https://github.com/dmitrykulakovfrontend/Paladins-Data",
      website: "https://paladins-data.vercel.app/",
    },
    {
      name: "Interview PlayBook",
      description: t("projects.Interview PlayBook.description"),
      bulletPoints: t("projects.Interview PlayBook.bulletPoints", {
        returnObjects: true,
      }),
      startDate: new Date(2022, 10, 1),
      endDate: new Date(2022, 11, 16),
      stack: "Next.js, TypeScript, tRPC, Prisma, Tailwind",
      src: interviewPlayBook,
      github: "https://github.com/dmitrykulakovfrontend/InterviewPlayBook",
      website: "https://interviewplaybook.vercel.app/",
    },
  ];
  return (
    <Section id="Projects" title={t("projects.title")}>
      <ul className="projects">
        {projects.map((project, i) => (
          <Project {...project} key={i} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
