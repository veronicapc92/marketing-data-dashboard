import React, { useContext } from "react";
import { formatNumber } from "./../Helper";
import { CURRENCY } from "./../Constants";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./table-total.css";

const TableTotal = () => {
  const { propsArray, dataPerDay } = useContext(ClientDataContext);
  const array = [...propsArray];
  array.shift();

  const generateTotal = (prop) => {
    let total = dataPerDay.reduce(
      (acc, currentValue) => acc + currentValue[prop],
      0
    );
    total = formatNumber(total);

    if (prop === "cost") return `${CURRENCY}${total}`;
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
