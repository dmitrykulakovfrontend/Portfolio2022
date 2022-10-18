import React from "react";
import Section from "../Section";
import "./About.scss";

import profileImg from "static/profile-img.jpg";
import InfoList from "../InfoList";

const profile = {
  birthday: "1 May 1995",
  phEmailone: "email@example.com",
  freelance: "Available",
  city: "New York, USA",
  age: "30",
  experience: "1 year",
};

const About = () => {
  return (
    <Section
      title="About"
      info="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
    >
      <div className="about">
        <img className="about__profile" src={profileImg} alt="profile" />
        <div className="about__text">
          <h3 className="about__title">UI/UX Designer & Web Developer.</h3>
          <p className="about__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <InfoList profile={profile} />
          <p className="about__description">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
