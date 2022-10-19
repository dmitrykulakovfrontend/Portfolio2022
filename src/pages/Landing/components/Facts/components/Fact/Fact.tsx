import React from "react";
import "./Fact.scss";

import FactType from "types/Fact";
import { useAnimatedCounter } from "hooks/useAnimatedCounter";

type FactProps = {
  fact: FactType;
};

const Fact = ({ fact }: FactProps) => {
  const animatedValue = useAnimatedCounter(fact.value, 0, 2);
  return (
    <div className="fact">
      <i className={`fact__icon uil uil-${fact.icon}`}></i>
      <span className="fact__value">{animatedValue}</span>
      <span className="fact__name">{fact.title}</span>
    </div>
  );
};

export default Fact;
