import React, { useContext } from "react";
import { capitalizeFirstLetter } from "../../../Helper";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./table.css";

const TableHead = ({ onSort, renderSortIcon }) => {
  const { keysArrayExtended } = useContext(ClientDataContext);

  return (
    <thead>
      <tr>
        {keysArrayExtended.map((key) => (
          <th className="table-head" key={key} onClick={() => onSort(key)}>
            {capitalizeFirstLetter(key)} {renderSortIcon(key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
