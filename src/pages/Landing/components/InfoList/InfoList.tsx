import React from "react";
import "./InfoList.scss";

type Profile = {
  [key: string]: string;
};

type InfoListProps = {
  profile: Profile;
};

const InfoList = ({ profile }: InfoListProps) => {
  return (
    <ul className="info-list">
      {Object.keys(profile).map((key, i) => {
        return (
          <li key={i} className="info-list__item">
            <span className="info-list__key">{key}: </span>
            <span className="info-list__value">{profile[key]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default InfoList;
