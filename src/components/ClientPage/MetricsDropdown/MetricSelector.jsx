import React, { useContext } from "react";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./metric-selector.css";

const MetricSelector = ({ onMetricSelect }) => {
  const { propsArray } = useContext(ClientDataContext);
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
