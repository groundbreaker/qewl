import { withProps } from "recompose";

export const debug = (message = "") =>
  withProps(props => {
    console.groupCollapsed(
      "%cDEBUG::%crecompose-props%c::" + message,
      "color:purple;font-weight:bold;",
      "color:green;",
      "color:black;"
    );
    console.dir(props);
    console.groupEnd();
  });
