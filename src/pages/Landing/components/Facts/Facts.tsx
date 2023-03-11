import React from "react";
import Section from "../Section";
import Fact from "./components/Fact";
import "./Facts.scss";
import { useTranslation } from "react-i18next";

type FactsProps = {
  activeSection: string;
};

const Facts = ({ activeSection }: FactsProps) => {
  const { t } = useTranslation();
  return (
    <Section id="Facts" title={t("facts.title")} info={t("facts.subtitle")}>
      <ul className="facts-list">
        {t("facts.achievements", { returnObjects: true }).map((fact, i) => (
          <Fact key={i} fact={fact} activeSection={activeSection} />
        ))}
      </ul>
    </Section>
  );
};

export default Facts;
