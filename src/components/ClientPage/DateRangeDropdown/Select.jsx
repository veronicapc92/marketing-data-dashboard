import React from "react";
import "./select.css";

const Select = ({ handleChange }) => {
  return (
    <select name="date-range" id="date-range" onChange={(e) => handleChange(e)}>
      <option value="30">Last 30 days</option>
      <option value="14">Last 14 days</option>
      <option value="7">Last 7 days</option>
    </select>
  );
};

export default Select;
