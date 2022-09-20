import useWindowSize from "hooks/useWindowSize";
import variables from "utils/variables";
  const { width } = useWindowSize();
          width && width < variables["screen-xl"]
            ? "page-menu closed"
            : "page-menu active"
