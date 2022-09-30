import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes["loader-card"]}>
      <span className={classes.loader}></span>
      <p className={classes["loading-text"]}>Loading...</p>
    </div>
  );
}

export default Loader;
