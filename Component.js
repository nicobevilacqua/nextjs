import React, { useContext } from "react";
import { Context } from "./ThemeContext";

export default function Component() {
  const [name, _] = useContext(Context);

  return <div>{name}</div>;
}
