import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ dataPerDay }) => {
  const propsArray = [];

  for (let prop in dataPerDay[0]) propsArray.push(prop);

  return (
    <React.Fragment>
      <table>
        <caption>Performance in the last 30 days</caption>
        <TableHead propsArray={propsArray} />
        <TableBody dataPerDay={dataPerDay} propsArray={propsArray} />
      </table>
    </React.Fragment>
  );
};

export default Table;
