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
  console.log("btnContext", btnContext);
  return (
    <div>
      <button className={`practice btn ${btnContext}`}>Click Button</button>
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
