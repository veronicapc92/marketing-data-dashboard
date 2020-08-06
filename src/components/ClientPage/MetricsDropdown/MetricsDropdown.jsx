import React, { useContext } from "react";
import { capitalizeFirstLetter } from "../../../Helper";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./metrics-dropdown.css";

const MetricsDropdown = ({ onMetricSelect }) => {
  const { keysArray } = useContext(ClientDataContext);
  const array = [...keysArray];
  array.shift();
  return (
    <select name="metrics" id="metrics" onChange={(e) => onMetricSelect(e)}>
      {array.map((key) => (
        <option key={key} value={key}>
          {capitalizeFirstLetter(key)}
        </option>
      ))}
    </select>
  );
};

export default MetricsDropdown;
