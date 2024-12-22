const JSXContextEX1 = `
const Button = ({ theme }: { theme: string }) => {
  return (
    <div>
      <button className={theme}>Click Button</button>
    </div>
  );
};

const ThemedButton = ({ theme }: { theme: string }) => {
  return (
    <div>
      <Button theme={theme} />
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton theme="dark" />
      <ThemedButton theme="blue" />
    </div>
  );
};

const ContextEX1 = () => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};

export default ContextEX1;
`;

const JSXContextEX2 = `
"use client";
import React, { createContext, ReactNode, useContext } from "react";

const ButtonContext = createContext("light");

const ButtonContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ButtonContext.Provider value="blue">{children}</ButtonContext.Provider>
  );
};

const Button = () => {
  const btnContext = useContext(ButtonContext);
  return (
    <div>
      <button className={\` \${btnContext}\`}>Click Button</button>
    </div>
  );
};

const ThemedButton = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ContextEX2 = () => {
  return (
    <ButtonContextProvider>
      <Toolbar />
    </ButtonContextProvider>
  );
};

export default ContextEX2;

`;

const JSXContextEX3 = `
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
`;

const JSXContextEX4 = `
"use client";
import { createContext, Fragment, ReactNode, useContext } from "react";

const ContextA = createContext("");
const ContextB = createContext("");

const ContextAProvider = ({ children }: { children: ReactNode }) => {
  const ContexB = useContext(ContextB);
  console.log("ContexB value inside ContextAProvider: ", ContexB); // undefined
  return <ContextA.Provider value="aaa">{children}</ContextA.Provider>;
};

In above code the result of
console.log("ContexB value inside ContextAProvider: ", ContexB);
will be undefined because
In React, context providers and consumers are used hierarchically:
1- A Provider makes a context value available to all its descendant components.
2- A Consumer (or useContext hook) can only access the value of a context from a provider higher in the tree
 (in the React render hierarchy).
ContextAProvider is wrapping ContextBProvider
This means that ContextBProvider is a descendant of ContextAProvider
When ContextAProvider is rendered, ContextBProvider has not been rendered yet, so the ContextB value is not
available in the component tree above ContextAProvider
In ContextAProvider, I called:
const ContexB = useContext(ContextB);
Since there is no ContextB.Provider rendered above ContextAProvider in the tree, the useContext(ContextB)
returns undefined.

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

`;

const JSXContextReact19 = `
"use client";
import { createContext, FC, Fragment, useContext, useState } from "react";

interface ContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ContextSTheme = createContext<ContextType | undefined>(undefined);

const ComponentB1 = () => {
  const ContextS = useContext(ContextSTheme);
  if (!ContextS) {
    throw new Error("ThemeSwitcher must be used within a ThemeContextProvider");
  }
  const { theme, setTheme } = ContextS;
  return (
    <Fragment>
      <div>ComponentB1</div>
      <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        Change Theme
      </button>
      <div>ContextSValue: {theme}</div>
    </Fragment>
  );
};

const ComponentA1 = () => {
  return (
    <Fragment>
      <div>ComponentA1</div>

      <ComponentB1 />
    </Fragment>
  );
};

const ContextReact19: FC = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ContextSTheme value={{ theme, setTheme }}>
      <Fragment>
        <div>ContextReact19</div>

        <ComponentA1 />
      </Fragment>
    </ContextSTheme>
  );
};

export default ContextReact19;


`;

export {
  JSXContextEX1,
  JSXContextEX2,
  JSXContextEX3,
  JSXContextEX4,
  JSXContextReact19,
};
