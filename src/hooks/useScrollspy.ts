import useWindowSize from 'hooks/useWindowSize';
import { useLayoutEffect, useState } from "react";

// source: https://dev.to/rgolawski/highlight-active-menu-item-with-scrollspy-hook-1gpp

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) => {
  return value >= floor && value <= ceil;
}
  

const useScrollspy = (ids: string[], offset: number | string = 0) => {
  const [activeId, setActiveId] = useState(""); 
  const {height} = useWindowSize();

  if (typeof offset === 'string') {
    offset = height! * (parseFloat(offset) / 100);
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      console.log('render');

      const scroll = window.pageYOffset;
      

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - +offset);
          const bottom = clamp(rect.bottom + scroll - +offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    handleScroll();

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids, offset, window.location]);
  return activeId;
};

export default useScrollspy;