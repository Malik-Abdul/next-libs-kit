import { Fragment } from "react";
import ContextEX1 from "./ContextEX1";
import {
  JSXContextEX1,
  JSXContextEX2,
  JSXContextEX3,
  JSXContextEX4,
} from "./JSXCodes";

import ContextEX2 from "./ContextEX2";
import ContextEX3MultiLevelContext from "./ContextEX3MultiLevelContext";

const ReactContextAPI = () => {
  return (
    <Fragment>
      <div>
        <h1>React Context API</h1>
        <div>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </div>
        <div>
          In a typical React application, data is passed top-down (parent to
          child) via props, but such usage can be cumbersome for certain types
          of props (e.g. locale preference, UI theme) that are required by many
          components within an application. Context allows you to share values
          between components without the need to pass props explicitly at every
          level of the component tree.
        </div>

        <h2>When to Use Context</h2>
        <div>
          Context is designed to share data that can be considered “global” for
          a tree of React components, such as the current authenticated user,
          theme, or preferred language. For instance, in the code below, we
          manually pass a "theme" prop through each level to apply styling to
          the Button component:
        </div>

        <ContextEX1 />

        <div className="jsxCode">
          <strong className="example">Without use of Context:</strong>
          <pre>
            <code>{JSXContextEX1}</code>
          </pre>
        </div>

        <div>
          Using context, we can avoid passing props through intermediate
          elements:
        </div>

        <div className="jsxCode">
          <strong className="example">With use Context:</strong>
          <pre>
            <code>{JSXContextEX2}</code>
          </pre>
        </div>

        <ContextEX2 />

        <h2>Nested Context</h2>
        <div className="jsxCode">
          <strong className="example">Nested Context Example:</strong>
          <pre>
            <code>{JSXContextEX4}</code>
          </pre>
        </div>

        <ContextEX3MultiLevelContext />
      </div>
    </Fragment>
  );
};

export default ReactContextAPI;
