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
    percent: 95,
    color: "sky",
  },
  {
    name: "JavaScript",
    percent: 90,
    color: "yellow",
  },
  {
    name: "CSS",
    percent: 85,
    color: "skyblue",
  },
  {
    name: "React",
    percent: 75,
    color: "blue",
  },
  {
    name: "TypeScript",
    percent: 65,
    color: "sky",
  },
  {
    name: "NodeJS",
    percent: 60,
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
          {skills.map(({ name, color, percent }, i) => (
            <Skill
              isInView={isInView}
              name={name}
              color={color}
              percent={percent}
              key={i}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Skills;
