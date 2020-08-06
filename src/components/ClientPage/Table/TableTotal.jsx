import React, { useContext } from "react";
import {
  formatNumber,
  formatPercentage,
  ctr,
  cpc,
  cpa,
  cr,
} from "../../../Helper";
import { CURRENCY } from "./../Constants";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./table.css";

const TableTotal = () => {
  const { keysArrayExtended, dataPerDayExtended } = useContext(
    ClientDataContext
  );
  const array = [...keysArrayExtended];
  array.shift();

  // Storing the total number of impressions, clicks, cost and conversions
  // in order to be able to use them to calculate CTR, CPC, etc.
  const total = {};

  // Calculates the values to be displayed in the total row
  const generateTotal = (key) => {
    const { impressions, clicks, cost, conversions } = total;
    let result;
    switch (key) {
      case "CTR":
        result = ctr(clicks, impressions);
        return formatPercentage(result);
      case "CPC":
        result = cpc(cost, clicks);
        return CURRENCY + result.toFixed(2);
      case "CPA":
        result = cpa(cost, conversions);
        return CURRENCY + result.toFixed(2);
      case "CR":
        result = cr(conversions, clicks);
        return formatPercentage(result);
      default:
        result = dataPerDayExtended.reduce(
          (acc, currentValue) => acc + currentValue[key],
          0
        );
        total[key] = result;
        result = formatNumber(result);

        return key === "cost" ? CURRENCY + result : result;
    }
  };

  return (
    <tr>
      <th className="table-total">Total</th>
      {array.map((key) => (
        <td className="table-total" key={key}>
          {generateTotal(key)}
        </td>
      ))}
    </tr>
  );
};

export default TableTotal;
