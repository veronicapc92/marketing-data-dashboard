import React from "react";
import "./table-head.css";

const TableHead = ({ propsArray }) => {
  return (
    <thead>
      <tr>
        {propsArray.map((prop) => (
          <th className="table-head" key={prop}>
            {prop}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
