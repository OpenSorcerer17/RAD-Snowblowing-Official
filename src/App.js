import "./App.css";
import Landing from "./components/UI/Landing";
import Navbar from "./components/UI/Navbar";
import QuoteForm from "./components/UI/QuoteForm";
import Footer from "./components/UI/Footer";
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <div className="container">
        <QuoteForm />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
