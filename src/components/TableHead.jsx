import React from "react";

const TableHead = ({ propsArray }) => {
  return (
    <thead>
      <tr>
        {propsArray.map((prop) => (
          <th key={prop}>{prop}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
