import React, { createContext, useState } from "react";

export const Context = createContext("");

export function ThemeProvider({ children }) {
  const [name, setName] = useState("normal");

  return (
    <Context.Provider value={[name, setName]}>{children}</Context.Provider>
  );
}
