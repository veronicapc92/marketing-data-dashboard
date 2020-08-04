import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./table.css";

const Table = ({
  dataPerDay,
  formatDate,
  formatNumber,
  currency,
  propsArray,
}) => {
  return (
    <table>
      <caption>Performance in the last 30 days</caption>
      <TableHead propsArray={propsArray} />
      <TableBody
        dataPerDay={dataPerDay}
        propsArray={propsArray}
        formatDate={formatDate}
        formatNumber={formatNumber}
        currency={currency}
      />
    </table>
  );
};

export default Table;
