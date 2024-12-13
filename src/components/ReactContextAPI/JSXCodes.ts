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

export { JSXContextEX1, JSXContextEX2, JSXContextEX3 };
