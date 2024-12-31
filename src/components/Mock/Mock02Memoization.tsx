"use client";
import { FC, Fragment } from "react";
import T02ReactMemo from "./utils/T02ReactMemo";
import T02UseMemo from "./utils/T02UseMemo";
import T02UseCallback from "./utils/T02UseCallback";

const Mock02Memoization: FC = () => {
  return (
    <Fragment>
      <h2>Mock02Memoization</h2>
      <div className="paragraph">
        Memoization in React.js is an optimization technique used to improve
        performance by storing the results of expensive function calls and
        reusing them when the same inputs occur again. This helps avoid
        unnecessary recalculations or re-rendering of components, enhancing the
        overall efficiency of the application.
      </div>
      <div className="paragraph">
        <strong>Component Re-renders:</strong>
        <ul>
          <li>
            React re-renders a component when its parent re-renders or when its
            props or state change. Memoization helps prevent re-renders of child
            components when their props remain the same.
          </li>
          <li>
            Use React.memo to wrap functional components to ensure they only
            re-render when their props change.
          </li>
        </ul>
      </div>
      <T02ReactMemo />
      <div className="paragraph">
        <strong>Expensive Calculations:</strong>
        <ul>
          <li>
            Memoization can cache the results of expensive calculations in a
            component, so the calculation doesn&apos;t repeat unnecessarily.
          </li>
          <li>Use useMemo to memoize values.</li>
        </ul>
      </div>
      <T02UseMemo />
      <div className="paragraph">
        <strong>Stable Functions:</strong>
        <ul>
          <li>
            Functions passed down as props can trigger re-renders if they change
            on every render. Memoization helps keep functions stable.
          </li>
          <li>Use useCallback to memoize functions.</li>
        </ul>
      </div>
      <T02UseCallback />
      <div className="paragraph">
        Memoization adds complexity and consumes memory for caching. Use it only
        when necessary, and profile your app&apos;s performance to determine
        bottlenecks before applying it.
      </div>
    </Fragment>
  );
};

export default Mock02Memoization;
