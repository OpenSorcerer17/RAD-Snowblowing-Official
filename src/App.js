import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
