import React from "react";
import { formatDate, formatNumber, formatPercentage } from "./../Helper";
import { CURRENCY } from "../Constants";
import TableTotal from "./TableTotal";
import "./table-body.css";

const TableBody = ({ sortedData }) => {
  return (
    <tbody>
      {sortedData.map((element) => {
        const {
          impressions,
          clicks,
          cost,
          conversions,
          CTR,
          CPC,
          CPA,
          CR,
        } = element;
        const date = formatDate(element);

        return (
          <tr key={element.date}>
            <th className="table-body">{date}</th>
            <td>{formatNumber(impressions)}</td>
            <td>{formatNumber(clicks)}</td>
            <td>{`${CURRENCY}${formatNumber(cost)}`}</td>
            <td>{formatNumber(conversions)}</td>
            <td>{formatPercentage(CTR)}</td>
            <td>{`${CURRENCY}${CPC.toFixed(2)}`}</td>
            <td>{`${CURRENCY}${CPA.toFixed(2)}`}</td>
            <td>{formatPercentage(CR)}</td>
          </tr>
        );
      })}

      <TableTotal />
    </tbody>
  );
};

export default TableBody;
