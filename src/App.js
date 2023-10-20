import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getRoutes } from "./route";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      {getRoutes()}
    </Router>
  );
};

export default App;
