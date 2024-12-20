"use client";
import { createContext, Fragment, ReactNode, useContext } from "react";

const ContextA = createContext("");
const ContextB = createContext("");

const ContextAProvider = ({ children }: { children: ReactNode }) => {
  const ContexB = useContext(ContextB);
  console.log("ContexB value inside ContextAProvider: ", ContexB); // Undefined
  return <ContextA.Provider value="aaa">{children}</ContextA.Provider>;
};

// In above code the result of
// console.log("ContexB value inside ContextAProvider: ", ContexB);
// will be undefined because
// In React, context providers and consumers are used hierarchically:
// 1- A Provider makes a context value available to all its descendant components.
// 2- A Consumer (or useContext hook) can only access the value of a context from a provider higher in the tree
//  (in the React render hierarchy).
// ContextAProvider is wrapping ContextBProvider
// This means that ContextBProvider is a descendant of ContextAProvider
// When ContextAProvider is rendered, ContextBProvider has not been rendered yet, so the ContextB value is not
// available in the component tree above ContextAProvider
// In ContextAProvider, I called:
// const ContexB = useContext(ContextB);
// Since there is no ContextB.Provider rendered above ContextAProvider in the tree, the useContext(ContextB)
// returns undefined.

const ContextBProvider = ({ children }: { children: ReactNode }) => {
  const ContexA = useContext(ContextA);
  console.log("ContexA value inside ContextBProvider: ", ContexA);
  return <ContextB.Provider value="bbb">{children}</ContextB.Provider>;
};

const ComponentC = () => {
  return (
    <Fragment>
      <div>ComponentC</div>
    </Fragment>
  );
};
const ComponentB = () => {
  return (
    <Fragment>
      <div>ComponentB</div>
      <ComponentC />
    </Fragment>
  );
};
const ComponentA = () => {
  return (
    <ContextAProvider>
      <ContextBProvider>
        <Fragment>
          <div>ComponentA</div>
          <ComponentB />
        </Fragment>
      </ContextBProvider>
    </ContextAProvider>
  );
};

const ContextEX3MultiLevelContext = () => {
  return (
    <Fragment>
      <ComponentA />
    </Fragment>
  );
};
export default ContextEX3MultiLevelContext;
