import React from "react";
import TableTotal from "./TableTotal";

const TableBody = ({
  dataPerDay,
  propsArray,
  formatDate,
  formatNumber,
  currency,
}) => {
  return (
    <tbody>
      {dataPerDay.map((element) => {
        const date = formatDate(element);

        return (
          <tr key={element.date}>
            <th>{date}</th>
            <td>{formatNumber(element.impressions)}</td>
            <td>{formatNumber(element.clicks)}</td>
            <td>{`${currency}${formatNumber(element.cost)}`}</td>
            <td>{formatNumber(element.conversions)}</td>
          </tr>
        );
      })}

      <TableTotal
        dataPerDay={dataPerDay}
        propsArray={propsArray}
        currency={currency}
      />
    </tbody>
  );
};

export default TableBody;
