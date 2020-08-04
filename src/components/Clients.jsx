import React from "react";
import Client from "./Client";
import "./clients.css";

const Clients = ({ clients }) => {
  return (
    <div className="clients-container">
      <h2>Clients</h2>
      <ul className="clients-list">
        {clients.map((client) => (
          <li>
            <Client key={client.id} client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
