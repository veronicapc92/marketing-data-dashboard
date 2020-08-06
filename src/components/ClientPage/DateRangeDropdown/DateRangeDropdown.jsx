import React from "react";
import "./date-range-dropdown.css";

const DateRangeDropdown = ({ handleChange }) => {
  const dateRanges = [30, 14, 7];

  return (
    <select name="date-range" id="date-range" onChange={(e) => handleChange(e)}>
      {dateRanges.map((dateRange) => (
        <option
          key={dateRange}
          value={dateRange}
        >{`Last ${dateRange} days`}</option>
      ))}
    </select>
  );
};

export default DateRangeDropdown;
