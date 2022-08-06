import React from "react";
import SearchInput from "./SearchInput";
import "./Navbar.css";

const Navbar = ({ searchKeyword }) => {
  return (
    <div className="note-app__navbar">
      <h1>Riko Airlan Ramadhan</h1>
      <SearchInput searchKeyword={searchKeyword} />
    </div>
  );
};

export default Navbar;
