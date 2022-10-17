import React, { ReactChildren, ReactNode } from "react";
import "./Section.scss";

type SectionProps = {
  title: string;
  info?: string;
  children: ReactNode;
};

const Section = ({ title, info, children }: SectionProps) => {
  return (
    <section
      className="page-section"
      id={title.toLowerCase().replace(" ", "-")}
    >
      <h2 className="page-section__title">{title}</h2>
      <p className="page-section__info">{info}</p>
      {children}
    </section>
  );
};

export default Section;
