import React from "react";
import Search from "../search/Search";
import classes from "./Header.module.css";

function Header({ onSearchChange }) {
  return (
    <header className={classes.header}>
      <h1>Check the weather</h1>
      <Search onSearchChange={onSearchChange} />
    </header>
  );
}

export default Header;
