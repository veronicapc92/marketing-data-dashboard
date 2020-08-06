import React, { useContext, useState } from "react";
import _ from "lodash";
import { ClientDataContext } from "./../../../contexts/clientDataContext";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./table.css";

const Table = () => {
  const { dataPerDayExtended } = useContext(ClientDataContext);
  const [columnToSort, setColumnToSort] = useState({
    metric: "date",
    order: "desc",
  });

  const handleSort = (metric) =>
    setColumnToSort((prevState) => {
      const columnToSort = { ...prevState };
      if (columnToSort.metric === metric)
        columnToSort.order = columnToSort.order === "asc" ? "desc" : "asc";
      else {
        columnToSort.metric = metric;
        columnToSort.order = "asc";
      }
      return columnToSort;
    });

  const renderSortIcon = (column) => {
    if (column !== columnToSort.metric) return;
    if (columnToSort.order === "asc") return <i className="fas fa-sort-up"></i>;
    return <i className="fas fa-sort-down"></i>;
  };

  const sortedData = _.orderBy(
    dataPerDayExtended,
    [columnToSort.metric],
    [columnToSort.order]
  );

  return (
    <table>
      <caption>Performance in the last 30 days</caption>
      <TableHead onSort={handleSort} renderSortIcon={renderSortIcon} />
      <TableBody sortedData={sortedData} />
    </table>
  );
};

export default Table;
