import React from "react";
import { Link } from "react-router-dom";

const Client = ({ client }) => {
  return (
    <React.Fragment>
      <div>
        <Link to={`/clients/${client.id}`}>{client.name}</Link>
      </div>
    </React.Fragment>
  );
};

export default Client;
