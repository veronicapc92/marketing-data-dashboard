import React, { useContext, useState } from "react";
import { ClientDataContext } from "./../../../contexts/clientDataContext";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import _ from "lodash";
import "./table.css";

const Table = () => {
  const { dataPerDay } = useContext(ClientDataContext);
  const [columnToSort, setColumnToSort] = useState({
    prop: "date",
    order: "desc",
  });

  const handleSort = (prop) =>
    setColumnToSort((prevState) => {
      const sortColumn = { ...prevState };
      if (sortColumn.prop === prop)
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      else {
        sortColumn.prop = prop;
        sortColumn.order = "asc";
      }
      return sortColumn;
    });

  const sortedData = _.orderBy(
    dataPerDay,
    [columnToSort.prop],
    [columnToSort.order]
  );

  return (
    <table>
      <caption>Performance in the last 30 days</caption>
      <TableHead onSort={handleSort} />
      <TableBody sortedData={sortedData} />
    </table>
  );
};

export default Table;
