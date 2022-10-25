import { motion } from "framer-motion";
import React, { useState } from "react";
import Section from "../Section";
import Skill from "./components/Skill";
import "./Skills.scss";

type SkillsProps = {
  activeSection: string;
};

const skills = [
  {
    name: "HTML",
    color: "red",
  },
  {
    name: "JavaScript",
    color: "yellow",
  },
  {
    name: "CSS",
    color: "blue",
  },
  {
    name: "React",
    color: "skyblue",
  },
  {
    name: "TypeScript",
    color: "sky",
  },
  {
    name: "NodeJS",
    color: "green",
  },
];

const Skills = ({ activeSection }: SkillsProps) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <Section
      inverted
      title="Skills"
      info="My knowledges of languages, frameworks and libraries"
    >
      <motion.div
        onViewportEnter={() => {
          setIsInView(true);
        }}
        className="skills"
      >
        <div className="skills__list">
          {skills.map(({ name, color }, i) => (
            <Skill isInView={isInView} name={name} color={color} key={i} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
