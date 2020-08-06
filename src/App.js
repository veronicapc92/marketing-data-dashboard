import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Clients from "./components/Homepage/Clients";
import ClientPage from "./components/ClientPage/ClientPage";
import ClientDataContextProvider from "./contexts/clientDataContext";
import "./fonts/fonts.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ClientDataContextProvider>
        <Switch>
          <Route path="/clients/:id" component={ClientPage} />
          <Route path="/" component={Clients} />
        </Switch>
      </ClientDataContextProvider>
    </div>
  );
}

export default App;
