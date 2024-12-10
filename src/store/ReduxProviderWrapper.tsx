// store/Providers.js
"use client";

import { Provider } from "react-redux";
import store from "./store"; // Import the already created store
import { ReactNode } from "react";

export function ReduxProviderWrapper({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
