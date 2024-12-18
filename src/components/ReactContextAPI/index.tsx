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
          components within an application. Context provides a way to share
          values like these between components without having to explicitly pass
          a prop through every level of the tree.
        </div>

        <h2>When to Use Context</h2>
        <div>
          Context is designed to share data that can be considered “global” for
          a tree of React components, such as the current authenticated user,
          theme, or preferred language. For example, in the code below we
          manually thread through a “theme” prop in order to style the Button
          component:
        </div>

        <ContextEX1 />

        <div className="jsxCode">
          <strong className="example">JSX ContextEX1</strong>
          <pre>
            <code>{JSXContextEX1}</code>
          </pre>
        </div>

        <h2>
          Using context, we can avoid passing props through intermediate
          elements:
        </h2>

        <div className="jsxCode">
          <strong className="example">JSX ContextEX2</strong>
          <pre>
            <code>{JSXContextEX2}</code>
          </pre>
        </div>

        <ContextEX2 />
        <h2>Before You Use Context</h2>
        <div>
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult.
        </div>
        <div>
          If you only want to avoid passing some props through many levels,
          component composition is often a simpler solution than context.
        </div>
        <div>
          For example, consider a Page component that passes a user and
          avatarSize prop several levels down so that deeply nested Link and
          Avatar components can read it:
        </div>
        <div className="jsxCode">
          <strong className="example">JSX ContextEX3</strong>
          <pre>
            <code>{JSXContextEX3}</code>
          </pre>
        </div>
        <div>
          It might feel redundant to pass down the user and avatarSize props
          through many levels if in the end only the Avatar component really
          needs it. It&apos;s also annoying that whenever the Avatar component
          needs more props from the top, you have to add them at all the
          intermediate levels too.
        </div>
        <h2>Nested Context</h2>
        <div className="jsxCode">
          <strong className="example">JSX ContextEX4</strong>
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
