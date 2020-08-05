import React, { useContext } from "react";
import { formatDate, formatNumber } from "./../Helper";
import { CURRENCY } from "../Constants";
import TableTotal from "./TableTotal";
import "./table-body.css";

const TableBody = ({ sortedData }) => {
  return (
    <tbody>
      {sortedData.map((element) => {
        const date = formatDate(element);

        return (
          <tr key={element.date}>
            <th className="table-body">{date}</th>
            <td>{formatNumber(element.impressions)}</td>
            <td>{formatNumber(element.clicks)}</td>
            <td>{`${CURRENCY}${formatNumber(element.cost)}`}</td>
            <td>{formatNumber(element.conversions)}</td>
          </tr>
        );
      })}

      <TableTotal />
    </tbody>
  );
};

export default TableBody;
