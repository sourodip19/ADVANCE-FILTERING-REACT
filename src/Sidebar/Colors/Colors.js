import React from "react";
import "./Colors.css";
import Input from "../../components/Input";
const Colors = ({handleChange}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-label-container color-title">Colors</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          title="Black"
          value="black"
          name="test3"
          color="black"
        />

        <Input
          handleChange={handleChange}
          title="Blue"
          value="blue"
          name="test3"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          title="Red"
          value="red"
          name="test3"
          color="red"
        />

        <Input
          handleChange={handleChange}
          title="Green"
          value="green"
          name="test3"
          color="green"
        />
      </div>

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>White
      </label>
    </div>
  );
};

export default Colors;
