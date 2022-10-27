import Button from "components/Button";
import React from "react";
import "./Project.scss";

type ProjectProps = {
  name: string;
  description: string;
  bulletPoints: string[];
  startDate: Date;
  endDate: Date;
  stack: string;
  src: string;
  dark?: boolean;
  github: string;
  website: string;
};

const Project = (props: ProjectProps) => {
  return (
    <li className="project">
      <div
        className={`project__hover ${props.dark ? "project__hover_dark" : ""}`}
      ></div>
      <div
        className={`project__time ${props.dark ? "project__time_dark" : ""}`}
      >
        <time dateTime={props.startDate.toISOString()}>
          {props.startDate.toLocaleDateString()}
        </time>{" "}
        -{" "}
        <time dateTime={props.endDate.toISOString()}>
          {props.endDate.toLocaleDateString()}
        </time>
      </div>
      <img
        className="project__image"
        src={props.src}
        alt={`${props.name} example`}
      />
      <div
        className={`project__info ${props.dark ? "project__info_dark" : ""}`}
      >
        <h4 className="project__name">{props.name}</h4>
        <p className="project__description">{props.description}</p>
        <p className="project__stack">{props.stack}</p>
        <ul className="project__bullets-list">
          {props.bulletPoints.map((bullet, i) => (
            <li className="project__bullet" key={i}>
              {bullet}
            </li>
          ))}
        </ul>
        <div className="project__buttons">
          <a
            className="project__link"
            target={"_blank"}
            href={props.github}
            rel="noreferrer"
          >
            <Button className="project__button" active>
              Github
            </Button>
          </a>
          <a
            className="project__link"
            target={"_blank"}
            href={props.website}
            rel="noreferrer"
          >
            <Button active>Website</Button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
