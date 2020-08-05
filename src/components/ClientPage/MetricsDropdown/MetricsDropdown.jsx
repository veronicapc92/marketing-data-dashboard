import React, { useContext } from "react";
import { capitalizeFirstLetter } from "./../Helper";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./metrics-dropdown.css";

const MetricsDropdown = ({ onMetricSelect }) => {
  const { propsArray } = useContext(ClientDataContext);
  const array = [...propsArray];
  array.shift();
  return (
    <select name="metrics" id="metrics" onChange={(e) => onMetricSelect(e)}>
      {array.map((prop) => (
        <option key={prop} value={prop}>
          {capitalizeFirstLetter(prop)}
        </option>
      ))}
    </select>
  );
};

export default MetricsDropdown;
