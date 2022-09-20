import type Variables from "types/variables";
import scssVariables from "styles/_variables.module.scss";

// This is a bad practice and I know it, but I couldn't find a way how to change type of scss modules variable
const object = JSON.parse(JSON.stringify(scssVariables));

for (const key in object) {
  object[key] = parseInt(object[key]);
}

const variables: Variables = object;


export default variables;