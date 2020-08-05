import React, { useState, useContext } from "react";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import DateRangeDropdown from "../DateRangeDropdown/DateRangeDropdown";
import MetricsDropdown from "../MetricsDropdown/MetricsDropdown";
import BarComponent from "../BarComponent/BarComponent";
import "./chart.css";

const Chart = () => {
  const { dataPerDay } = useContext(ClientDataContext);
  const [dateRange, setDateRange] = useState(0);
  const [prop, setProp] = useState("impressions");

  // Dynamically creating a dateRangeArray depending on the
  // dateRange selected by the user via the Select component
  const index = dataPerDay.length - dateRange;
  const dateRangeArray = !dateRange ? dataPerDay : dataPerDay.slice(index);

  const handleChange = (e) => setDateRange(e.target.value);

  const handleMetricSelect = (e) => setProp(e.target.value);

  return (
    <div className="chart-container">
      <div className="dropdowns-container">
        <DateRangeDropdown handleChange={handleChange} />
        <MetricsDropdown onMetricSelect={handleMetricSelect} />
      </div>
      <BarComponent dateRangeArray={dateRangeArray} prop={prop} />
    </div>
  );
};

export default Chart;
