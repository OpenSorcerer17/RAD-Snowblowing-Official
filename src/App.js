import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import QuoteForm from "./components/UI/QuoteForm";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing/>
      <QuoteForm />
      
    </Fragment>
  );
}

export default App;
