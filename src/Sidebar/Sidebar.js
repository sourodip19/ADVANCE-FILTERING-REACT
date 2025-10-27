import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <button
          className="logo-container"
          onClick={() => window.location.reload()}
        >
          🛒
        </button>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
