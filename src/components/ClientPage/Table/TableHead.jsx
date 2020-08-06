import React, { useContext } from "react";
import { capitalizeFirstLetter } from "../Helper";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./table-head.css";

const TableHead = ({ onSort, renderSortIcon }) => {
  const { propsArrayExtended } = useContext(ClientDataContext);

  return (
    <thead>
      <tr>
        {propsArrayExtended.map((prop) => (
          <th className="table-head" key={prop} onClick={() => onSort(prop)}>
            {capitalizeFirstLetter(prop)} {renderSortIcon(prop)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
