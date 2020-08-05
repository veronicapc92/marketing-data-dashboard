import React, { useState } from "react";

export const ClientDataContext = React.createContext();

const ClientDataContextProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [dataPerDay, setDataPerDay] = useState([]);

  // Creating an array with the property names of the dataPerDay[0]
  // object ("impressions", "cost", etc).
  // This is so we can render the table heading and metric
  // dropdown options dynamically instead of hardcoding them
  const propsArray = [];
  for (let prop in dataPerDay[0]) propsArray.push(prop);

  return (
    <ClientDataContext.Provider
      value={{
        clientData,
        dataPerDay,
        propsArray,
        setClientData,
        setDataPerDay,
      }}
    >
      {children}
    </ClientDataContext.Provider>
  );
};

export default ClientDataContextProvider;
