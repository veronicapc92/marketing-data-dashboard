import React from "react";
import { Link } from "react-router-dom";
import "./client.css";

const Client = ({ client }) => {
  return (
    <div className="client-container">
      <img className="client-logo" src={client.logo} alt={client.name} />
      <Link className="client" to={`/clients/${client.id}`}>
        {client.name}
      </Link>
    </div>
  );
};

export default Client;
