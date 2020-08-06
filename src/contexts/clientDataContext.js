import React, { useState } from "react";
export const ClientDataContext = React.createContext();

const ClientDataContextProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [dataPerDay, setDataPerDay] = useState([]);

  const dataPerDayExtended = [...dataPerDay];
  for (let element of dataPerDayExtended) {
    const index = dataPerDayExtended.indexOf(element);
    dataPerDayExtended[index] = { ...dataPerDayExtended[index] };
    const { impressions, clicks, cost, conversions } = dataPerDayExtended[
      index
    ];
    dataPerDayExtended[index].CTR = clicks / impressions;
    dataPerDayExtended[index].CPC = cost / clicks;
    dataPerDayExtended[index].CPA = cost / conversions;
    dataPerDayExtended[index].CR = conversions / clicks;
  }

  // Creating an array with the property names of the dataPerDay[0]
  // object ("impressions", "cost", etc).
  // This is so we can render the table heading and metric
  // dropdown options dynamically instead of hardcoding them
  const propsArray = [];
  for (let prop in dataPerDay[0]) propsArray.push(prop);

  const propsArrayExtended = [];
  for (let prop in dataPerDayExtended[0]) propsArrayExtended.push(prop);

  return (
    <ClientDataContext.Provider
      value={{
        clientData,
        dataPerDay,
        dataPerDayExtended,
        propsArray,
        propsArrayExtended,
        setClientData,
        setDataPerDay,
      }}
    >
      {children}
    </ClientDataContext.Provider>
  );
};

export default ClientDataContextProvider;
