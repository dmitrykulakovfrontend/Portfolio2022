import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import "./Section.scss";

type SectionProps = {
  id: string;
  info?: string;
  children?: ReactNode;
  inverted?: boolean;
  title?: string;
};

const Section = ({
  id,
  info,
  children,
  inverted,
  title = id,
}: SectionProps) => {
  return (
    <motion.section
      transition={{ ease: "easeInOut", duration: 1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      className={inverted ? "page-section page-section_dark" : "page-section"}
      id={id.toLowerCase().replace(" ", "-")}
    >
      <h2
        className={
          inverted
            ? "page-section__title page-section__title_dark"
            : "page-section__title"
        }
      >
        {title}
      </h2>
      <p
        className={
          inverted
            ? "page-section__info page-section__info_dark"
            : "page-section__info"
        }
      >
        {info}
      </p>
      {children}
    </motion.section>
  );
};

export default Section;
