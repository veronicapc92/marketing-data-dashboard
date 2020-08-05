import React, { useContext } from "react";
import { capitalizeFirstLetter } from "../Helper";
import { ClientDataContext } from "../../../contexts/clientDataContext";
import "./table-head.css";

const TableHead = () => {
  const { propsArray } = useContext(ClientDataContext);
  return (
    <thead>
      <tr>
        {propsArray.map((prop) => (
          <th className="table-head" key={prop}>
            {capitalizeFirstLetter(prop)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
