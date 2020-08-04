import React from "react";
import numeral from "numeral";
import "./table-total.css";

const TableTotal = ({ dataPerDay, propsArray, currency }) => {
  const array = [...propsArray];
  array.shift();

  const generateTotal = (prop) => {
    let total = dataPerDay.reduce(
      (acc, currentValue) => acc + currentValue[prop],
      0
    );
    total = numeral(total).format("0,0");

    if (prop === "cost") return `${currency}${total}`;
    return total;
  };

  return (
    <tr>
      <th className="table-total">Total</th>
      {array.map((prop) => (
        <td className="table-total" key={prop}>
          {generateTotal(prop)}
        </td>
      ))}
    </tr>
  );
};

export default TableTotal;
