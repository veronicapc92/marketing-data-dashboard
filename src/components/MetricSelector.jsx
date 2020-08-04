import React from "react";
import "./metric-selector.css";

const MetricSelector = ({ onMetricSelect, propsArray }) => {
  const array = [...propsArray];
  array.shift();
  return (
    <select name="metrics" id="metrics" onChange={(e) => onMetricSelect(e)}>
      {array.map((prop) => (
        <option value={prop}>{prop}</option>
      ))}
    </select>
  );
};

export default MetricSelector;
