import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";
import Chart from "./Chart";
import numeral from "numeral";
import "./client-page.css";

const ClientPage = (props) => {
  const clientId = props.match.params.id;
  const [clientData, setClientData] = useState([]);
  const [dataPerDay, setDataPerDay] = useState([]);
  useEffect(() => {
    const getClientData = async () => {
      try {
        const { data: clientData } = await axios.get(
          `http://localhost:3000/clients/${clientId}`
        );
        setClientData(clientData);
        setDataPerDay(clientData.data);
      } catch (error) {
        console.log("getClientData error", error);
      }
    };
    getClientData(clientId);
  }, []);

  const formatDate = (element) => {
    const dateObject = new Date(element.date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatNumber = (number) => numeral(number).format("0,0");

  const currency = "£";

  return (
    <div>
      <div className="client-name-container">
        <img className="logo" src={clientData.logo} alt={clientData.name} />
        <h2 className="client-name">{clientData.name}</h2>
      </div>
      <Chart
        dataPerDay={dataPerDay}
        formatDate={formatDate}
        formatNumber={formatNumber}
        currency={currency}
      />
      <Table
        dataPerDay={dataPerDay}
        formatDate={formatDate}
        formatNumber={formatNumber}
        currency={currency}
      />
    </div>
  );
};

export default ClientPage;
