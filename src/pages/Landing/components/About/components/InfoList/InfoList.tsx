import React from "react";
import "./InfoList.scss";

type Profile = {
  [key: string]: {
    value: string;
    name: string;
  };
};

type InfoListProps = {
  profile: Profile;
};

const InfoList = ({ profile }: InfoListProps) => {
  return (
    <ul className="info-list">
      {Object.entries(profile).map(([, profile], i) => {
        return (
          <li key={i} className="info-list__item">
            <span className="info-list__key">{profile.name}: </span>
            <span className="info-list__value">{profile.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default InfoList;
