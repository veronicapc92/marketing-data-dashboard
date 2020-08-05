import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./table.css";

const Table = () => {
  return (
    <table>
      <caption>Performance in the last 30 days</caption>
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
