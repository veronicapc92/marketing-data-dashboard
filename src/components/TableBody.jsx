import React from "react";
import numeral from "numeral";
import TableTotal from "./TableTotal";

const TableBody = ({ dataPerDay, propsArray }) => {
  const formatDate = (element) => {
    const dateObject = new Date(element.date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return { day, month, year };
  };

  const formatNumber = (number) => numeral(number).format("0,0");

  const currency = "£";

  return (
    <tbody>
      {dataPerDay.map((element) => {
        const date = formatDate(element);

        return (
          <tr key={element.date}>
            <th>{`${date.day}/${date.month}/${date.year}`}</th>
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
