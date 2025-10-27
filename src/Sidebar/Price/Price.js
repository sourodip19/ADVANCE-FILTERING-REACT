import React from "react";
import "./Price.css";
import Input from "../../components/Input";
const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-label-container">Price</h2>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          title="$50-$100"
          value={50}
          name="test2"
        />

        <Input
          handleChange={handleChange}
          title="$100-$150"
          value={100}
          name="test2"
        />

        <Input
          handleChange={handleChange}
          title="$150-$200"
          value={150}
          name="test2"
        />

        <Input
          handleChange={handleChange}
          title="$150-$200"
          value={200}
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
