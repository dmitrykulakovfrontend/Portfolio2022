import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import "./Section.scss";

type SectionProps = {
  title: string;
  info?: string;
  children?: ReactNode;
};

const Section = ({ title, info, children }: SectionProps) => {
  title = title.toLowerCase().replace(" ", "-");
  return (
    <motion.div
      transition={{ ease: "easeInOut", duration: 1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // eslint-disable-next-line no-console
      onViewportEnter={() => console.log("Enter")}
      viewport={{ once: true, margin: "-100px 0px" }}
    >
      <section className="page-section" id={title}>
        <h2 className="page-section__title">{title}</h2>
        <p className="page-section__info">{info}</p>
        {children}
      </section>
    </motion.div>
  );
};

export default Section;
