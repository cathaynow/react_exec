import React from "react";
import classes from "./Layout.module.css";
import { Nav } from "./Nav";

export const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
