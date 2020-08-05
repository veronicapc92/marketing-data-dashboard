import React, { useContext } from "react";
import { formatDate, formatNumber } from "./../Helper";
import { CURRENCY } from "../Constants";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import TableTotal from "./TableTotal";
import "./table-body.css";

const TableBody = () => {
  const { dataPerDay } = useContext(ClientDataContext);
  return (
    <tbody>
      {dataPerDay.map((element) => {
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
