import React from "react";
import Section from "../Section";
import Fact from "./components/Fact";
import "./Facts.scss";
import type FactType from "types/Fact";

const facts: FactType[] = [
  {
    value: 4,
    title: "Finished Projects",
    icon: "wordpress-simple",
  },
  {
    value: 250,
    title: "Solved Coding Challenges",
    icon: "desktop",
  },
  {
    value: 600,
    title: "Contributions",
    icon: "globe",
  },
  {
    value: 1500,
    title: "Hours of Coding",
    icon: "keyboard",
  },
];

type FactsProps = {
  activeSection: string;
};

const Facts = ({ activeSection }: FactsProps) => {
  return (
    <Section title="Facts" info="Here some facts that I achieved and proud of">
      <ul className="facts-list">
        {facts.map((fact, i) => (
          <Fact key={i} fact={fact} activeSection={activeSection} />
        ))}
      </ul>
    </Section>
  );
};

export default Facts;
