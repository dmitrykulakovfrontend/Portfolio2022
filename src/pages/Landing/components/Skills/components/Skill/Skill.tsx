import { motion } from "framer-motion";
import React from "react";
import "./Skill.scss";

const ColorsList = {
  red: "red",
  sky: "sky",
  purple: "purple",
  yellow: "yellow",
  blue: "blue",
  green: "green",
  skyblue: "skyblue",
  darkgreen: "darkgreen",
} as const;

export type Colors = typeof ColorsList[keyof typeof ColorsList] | string;

type SkillProps = {
  name: string;
  percent?: number;
  isInView: boolean;
  color?: Colors;
};

const Skill = ({
  name,
  percent = 100,
  isInView,
  color = ColorsList.red,
}: SkillProps) => {
  return (
    <div className="progressbar">
      <svg className="progressbar__svg">
        <motion.circle
          transition={{ ease: "easeInOut", duration: 1 }}
          initial={{ strokeDashoffset: 440 }}
          animate={
            isInView && {
              strokeDashoffset: 440 - (440 * percent) / 100,
            }
          }
          cx="80"
          cy="80"
          r="70"
          className={`progressbar__svg-circle stroke-${color} shadow-${color}`}
        ></motion.circle>
      </svg>
      <span className={`progressbar__text shadow-${color}`}>{name}</span>
    </div>
  );
};

export default Skill;
